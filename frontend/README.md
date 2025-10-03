# Arventis Frontend

Proyecto frontend para Arventis - Soluciones tecnológicas innovadoras.

## 🚀 Últimas actualizaciones (3 Oct 2025)

### 🔄 Refactorización CalliconsComponents - Layout Flexbox Moderno
- **Migración a Flexbox**: Reemplazo completo del sistema de grid con porcentajes por flexbox nativo
- **Espaciado automático**: Implementación de `gap` para distribución uniforme sin cálculos manuales
- **Layout 3+2 optimizado**: 3 tarjetas superiores + 2 inferiores centradas automáticamente
- **Responsive mejorado**: Distribución adaptativa sin breakpoints complicados

#### **Mejoras técnicas en CalliconsComponents.vue**
- **Sistema dinámico**: Array `processSteps` para gestión de contenido
- **Nueva tarjeta agregada**: "Testing y Optimización" con ícono `bi-gear`
- **Conectores inteligentes**: Líneas entre tarjetas 1→2→3 y 4→5
- **Código más limpio**: Eliminación de cálculos de porcentajes y márgenes manuales

#### **CSS Flexbox implementado en callicons.css**
```css
.row.justify-content-center {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  align-items: flex-start;
}

.col-lg-2-4 {
  flex: 1;
  min-width: 280px;
  max-width: 320px;
}
```

### 🎯 Expansión de servicios en ServicesView
- **Nuevos servicios agregados**: 3 tarjetas adicionales para un total de 9 servicios
- **Inteligencia Artificial**: Soluciones de IA y machine learning (`bi-robot`)
- **Marketing Digital**: Estrategias digitales y generación de leads (`bi-megaphone`)
- **SEO y Posicionamiento**: Optimización para motores de búsqueda (`bi-search`)

#### **Sistema dinámico mejorado**
- **Grid responsivo**: Bootstrap `col-md-6 col-lg-4` para distribución 3x3
- **Consistencia**: Mismo formato para todas las tarjetas de servicios
- **Enlaces funcionales**: Rutas específicas para cada servicio y FAQ

### 🎨 Mejoras de UX/UI
- **Distribución visual equilibrada**: Layout 3+2 más atractivo que 5 en línea
- **Espaciado uniforme**: Flexbox garantiza consistencia automática
- **Animaciones escalables**: Sistema preparado para nuevas tarjetas
- **Conectores visuales**: Flujo claro del proceso de trabajo

### 📱 Responsive Design Avanzado
- **Desktop**: 3 tarjetas arriba, 2 abajo centradas
- **Tablets**: Distribución flexible adaptativa
- **Móviles**: 2 por fila con espaciado óptimo
- **Flexbox nativo**: Mejor soporte cross-browser

### 🔧 Refactorización técnica
- **Eliminación de hacks CSS**: No más `margin-left: 16.666667%`
- **Código mantenible**: Flexbox más fácil de modificar y escalar
- **Performance mejorada**: Menos cálculos CSS complejos
- **Escalabilidad**: Fácil agregar/quitar elementos

---

## 🚀 Actualizaciones anteriores (30 Sep 2025)

### 🎬 Integración de animaciones ScrollReveal
- **ScrollReveal 4.0.9**: Instalación y configuración de la librería de animaciones
- **Composable personalizado**: Creación de `useScrollReveal.js` para manejo reutilizable
- **Configuración global**: Setup en `main.js` con parámetros optimizados (distance: 60px, duration: 2000ms)
- **Integración en componentes**: Aplicación de animaciones reveal en hero sections

### 🏗️ Nuevos componentes desarrollados

#### **ComputerComponents.vue**
- Sección de descripción de servicios con imagen circular
- Background gradient personalizado con pasos numerados
- Diseño responsive con Bootstrap grid system
- Archivo de estilos: `computer.css`

#### **CalliconsComponents.vue** 
- Visualización de proceso de trabajo en 4 pasos
- Iconos Bootstrap (bi-play-circle, bi-exclamation-triangle, bi-code-slash, bi-check-circle)
- Cards con alturas consistentes y hover effects
- Archivo de estilos: `callicons.css`

#### **HeroSerComponents.vue**
- Hero section estilo agencia con layout de dos columnas
- Elementos decorativos flotantes superpuestos (laptop, code-slash, shield-check)
- Animaciones CSS personalizadas (float-slow, float-dots, float-elements)
- Diseño responsive con padding adaptativo (`py-0 py-lg-5`)
- Archivo de estilos: `hser.css`

#### **SerAcComponents.vue**
- Call-to-action con diseño de rectángulo superpuesto al footer
- 20 puntos decorativos blancos con opacidad variable (0.15-0.2)
- Gradiente moderno (135deg, #6366f1 a #4f46e5)
- Posicionamiento absoluto con `margin-top: -80px` para superposición
- Archivo de estilos: `seraccion.css`

### 🎨 Mejoras de diseño y estilos CSS

#### **Arquitectura CSS modular**
- Separación de estilos decorativos de lógica de componentes
- Organización por componentes en `/assets/style/components/`
- Import centralizado en `main.js` para mejor gestión

#### **Elementos decorativos avanzados**
- **Círculos flotantes**: 4 círculos de diferentes tamaños con gradientes
- **Puntos animados**: 5 dots con animación float personalizada
- **Overlays de iconos**: Elementos flotantes con iconos Bootstrap
- **Gradientes complejos**: Backgrounds con múltiples degradados

#### **Animaciones CSS personalizadas**
```css
@keyframes float-slow: Movimiento vertical suave (6s)
@keyframes float-dots: Animación de puntos (4s)  
@keyframes float-elements: Movimiento de elementos (8s)
```

#### **Sistema responsive mejorado**
- Breakpoints optimizados para móviles, tablets y desktop
- Puntos decorativos adaptativos (6px móvil, 8px desktop)
- Padding y margin responsivos con Bootstrap utilities
- Tipografía escalable (`fs-6 fs-lg-5`, `display-6`)

### 🔧 Mejoras técnicas

#### **ServiceCard.vue refactorizado**
- Limpieza de estilos decorativos movidos a `services.css`
- Separación de responsabilidades componente/decoración
- Mantenimiento de funcionalidad core sin cambios

#### **Gestión de dependencias**
- **ScrollReveal**: Instalación via pnpm con configuración global
- **Bootstrap Icons**: Integración completa con iconografía moderna
- **CSS modular**: Sistema de imports organizados por tipo

#### **Configuración optimizada**
- **main.js**: Setup de ScrollReveal con parámetros globales
- **CSS imports**: Centralización de todos los estilos de componentes
- **Composables**: Patrón reutilizable para ScrollReveal

### 📱 Mejoras responsive específicas
- **Móviles**: Padding reducido, elementos más pequeños, animaciones optimizadas
- **Tablets**: Tamaños intermedios, layout adaptativo
- **Desktop**: Efectos completos, elementos decorativos máximos

### 🎯 Nuevos archivos creados/modificados
- `src/composables/useScrollReveal.js` - Composable para animaciones
- `src/components/ComputerComponents.vue` - Componente de servicios
- `src/components/CalliconsComponents.vue` - Proceso de trabajo
- `src/components/HeroSerComponents.vue` - Hero estilo agencia  
- `src/components/SerAcComponents.vue` - CTA superpuesto
- `src/assets/style/components/computer.css` - Estilos computer
- `src/assets/style/components/callicons.css` - Estilos callicons
- `src/assets/style/components/hser.css` - Estilos hero service
- `src/assets/style/components/seraccion.css` - Estilos CTA overlay
- `src/assets/style/components/services.css` - Decoraciones service card

---

## 🚀 Actualizaciones anteriores (24 Sep 2025)

### ✨ Nuevos componentes
- **HeroComponents.vue**: Componente hero principal con imagen de logo transparente importada dinámicamente
- **CallActionComponents.vue**: Sección de llamada a la acción con gradiente personalizado

### 🎨 Mejoras de diseño y estilos
- **Hero Section**: 
  - Nuevo diseño centrado con logo transparente
  - Degradado personalizado con overlay dinámico (`rgba(7, 15, 30, 0.7)`)
  - Responsive design mejorado (breakpoints xl/lg)
  - Animaciones de entrada suaves

- **Navegación**:
  - Animación de línea inferior en links del navbar
  - Efectos hover con transiciones suaves (0.3s)
  - Estados activos con indicadores visuales
  - Línea animada centrada (90% del ancho del link)

- **Botones**:
  - Nuevo estilo para botones hero (`#08b2f7`)
  - Estados hover mejorados (`#0691d9`)
  - Especificidad CSS optimizada para Bootstrap

### 🖼️ Recursos actualizados
- Migración de PNG a WebP para mejor rendimiento
- Nueva imagen hero (`hero.webp`)
- Logo transparente optimizado (`transparente.webp`)

### 📱 Mejoras responsive
- Breakpoints optimizados para diferentes pantallas
- Width responsivo: 100% en <1200px, 75%/50% en ≥1200px
- Logo hero adaptativo (max-width: 20%)

### 🎯 Colores y paleta
- Color principal: `#08b2f7` (azul claro vibrante)
- Color hover: `#0691d9` 
- Fondo hero: `#0A152B` con variaciones más oscuras
- Gradientes personalizados para call-to-action

### 📁 Estructura de archivos actualizada
- `src/components/HeroComponents.vue` - Componente hero principal
- `src/components/CallActionComponents.vue` - Llamada a la acción  
- `src/assets/style/components/callaction.css` - Estilos CTA
- `src/assets/style/views/home.css` - Estilos home actualizados

## 🛠️ Project setup

### Instalación
```bash
npm install
# o usando pnpm
pnpm install
```

### Desarrollo local
```bash
npm run serve
# o usando pnpm  
pnpm run serve
```

### Build para producción
```bash
npm run build
# o usando pnpm
pnpm run build
```

### Linting y formato
```bash
npm run lint
npm run format
```

### Scripts adicionales
```bash
npm run clean          # Limpiar directorio dist
npm run build:clean    # Limpiar y construir
```

## 🎨 Tecnologías utilizadas
- Vue.js 3
- Vue Router 4  
- Bootstrap 5.3
- Axios para HTTP
- CSS3 con animaciones personalizadas
- WebP para imágenes optimizadas

## 📦 Gestión de paquetes
Este proyecto soporta tanto npm como pnpm. Se recomienda pnpm para mejor rendimiento.

## ⚙️ Configuración
Ver [Configuration Reference](https://cli.vuejs.org/config/) para más detalles de configuración.
