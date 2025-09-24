const fs = require('fs');
const path = require('path');
const rimraf = require('rimraf');

const distPath = path.join(__dirname, 'dist');
const logosPath = path.join(distPath, 'logos'); // Full path to logos directory

console.log('Limpiando directorio dist (excepto logos)...');

// Verificar si el directorio dist existe
if (fs.existsSync(distPath)) {
  try {
    // Eliminar todos los archivos y directorios de dist EXCEPTO logos
    const entries = fs.readdirSync(distPath);
    
    for (const entry of entries) {
      if (entry !== 'logos') { // Evitar eliminar la carpeta logos
        const entryPath = path.join(distPath, entry);
        try {
          rimraf.sync(entryPath);
          console.log(`Eliminado: ${entry}`);
        } catch (err) {
          console.warn(`No se pudo eliminar ${entry}:`, err.message);
        }
      } else {
        console.log('Preservando directorio logos...');
      }
    }
    
    console.log('Limpieza selectiva completada.');
    
  } catch (error) {
    console.error('Error durante la limpieza del directorio dist:', error.message);
    console.log('Continuando con el proceso de compilación...');
  }
} else {
  console.log('El directorio dist no existe, no es necesario limpiarlo.');
}

// Asegurar que el directorio dist exista para la compilación
if (!fs.existsSync(distPath)) {
  try {
    fs.mkdirSync(distPath);
    console.log('Se ha creado un nuevo directorio dist.');
  } catch (err) {
    console.error('No se pudo crear el directorio dist:', err.message);
  }
}

// Asegurar que el directorio logos exista
if (!fs.existsSync(logosPath)) {
  try {
    fs.mkdirSync(logosPath, { recursive: true });
    console.log('Se ha creado el directorio logos.');
  } catch (err) {
    console.error('No se pudo crear el directorio logos:', err.message);
  }
}
    cleanDirectory(distPath);
    
    console.log('Limpieza selectiva completada. Los directorios protegidos se mantuvieron intactos.');
    
  } catch (error) {
    console.error('Error al limpiar el directorio dist:', error.message);
    console.log('Continuando con el proceso de compilación...');
  }
} else {
  console.log('El directorio dist no existe, no es necesario limpiarlo.');
}

// Asegurar que el directorio dist exista para la compilación
if (!fs.existsSync(distPath)) {
  try {
    fs.mkdirSync(distPath);
    console.log('Se ha creado un nuevo directorio dist vacío.');
  } catch (err) {
    console.error('No se pudo crear el directorio dist:', err.message);
  }
}

// Asegurar que existe el directorio logos
const logosPath = path.join(distPath, 'logos');
if (!fs.existsSync(logosPath)) {
  try {
    fs.mkdirSync(logosPath, { recursive: true });
    console.log('Se ha creado el directorio logos.');
  } catch (err) {
    console.error('No se pudo crear el directorio logos:', err.message);
  }
}
