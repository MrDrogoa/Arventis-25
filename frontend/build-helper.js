const fs = require('fs');
const path = require('path');

/**
 * Script de ayuda para manejar tareas del proceso de build
 */

function ensureDirectoryExists(dirPath) {
  if (!fs.existsSync(dirPath)) {
    try {
      fs.mkdirSync(dirPath, { recursive: true });
      console.log(`Directorio creado: ${dirPath}`);
      return true;
    } catch (err) {
      console.error(`Error al crear directorio ${dirPath}:`, err);
      return false;
    }
  }
  return true;
}

function copyFilesRecursively(src, dest) {
  if (!fs.existsSync(src)) {
    console.error(`La ruta de origen no existe: ${src}`);
    return;
  }

  ensureDirectoryExists(dest);

  const entries = fs.readdirSync(src, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      copyFilesRecursively(srcPath, destPath);
    } else {
      try {
        fs.copyFileSync(srcPath, destPath);
        console.log(`Archivo copiado: ${destPath}`);
      } catch (err) {
        console.error(`Error al copiar archivo ${srcPath}:`, err);
      }
    }
  }
}

// Función para asegurar que los recursos estáticos clave existan en la carpeta dist
function prepareStaticAssets() {
  const distPath = path.join(__dirname, 'dist');
  const publicPath = path.join(__dirname, 'public');
  const logosDistPath = path.join(distPath, 'logos');

  // Asegúrate de que existe la carpeta dist/logos
  ensureDirectoryExists(logosDistPath);

  // Copia los logos de public/logos a dist/logos (si existen)
  const publicLogosPath = path.join(publicPath, 'logos');
  if (fs.existsSync(publicLogosPath)) {
    copyFilesRecursively(publicLogosPath, logosDistPath);
  } else {
    console.warn('Carpeta de logos no encontrada en public/logos');
  }
}

/**
 * Función para preservar directorios específicos durante el proceso de build
 * Útil para directorios que dan problemas de permisos en Windows
 */
function preserveDirectories(baseDir, directoriesToPreserve) {
  const tempDir = path.join(__dirname, 'temp_preserved_dirs');
  ensureDirectoryExists(tempDir);
  
  const preserved = [];
  
  // Guardar los directorios que necesitamos preservar
  for (const dir of directoriesToPreserve) {
    const sourcePath = path.join(baseDir, dir);
    const tempPath = path.join(tempDir, dir);
    
    if (fs.existsSync(sourcePath)) {
      try {
        // Crear el directorio temporal si no existe
        ensureDirectoryExists(path.dirname(tempPath));
        
        // Copiar el directorio al temporal
        copyFilesRecursively(sourcePath, tempPath);
        preserved.push({ name: dir, tempPath, originalPath: sourcePath });
      } catch (err) {
        console.error(`Error al preservar el directorio ${dir}:`, err);
      }
    }
  }
  
  return {
    // Función para restaurar los directorios preservados
    restore: () => {
      for (const item of preserved) {
        if (fs.existsSync(item.tempPath)) {
          ensureDirectoryExists(path.dirname(item.originalPath));
          copyFilesRecursively(item.tempPath, item.originalPath);
          console.log(`Restaurado el directorio preservado: ${item.name}`);
        }
      }
      
      // Limpiar directorio temporal
      if (fs.existsSync(tempDir)) {
        try {
          fs.rmdirSync(tempDir, { recursive: true });
        } catch (err) {
          console.warn(`No se pudo eliminar el directorio temporal: ${err.message}`);
        }
      }
    }
  };
}

// Ejecutar prepareStaticAssets si este script se ejecuta directamente
if (require.main === module) {
  prepareStaticAssets();
}

module.exports = {
  ensureDirectoryExists,
  copyFilesRecursively,
  prepareStaticAssets,
  preserveDirectories
};
