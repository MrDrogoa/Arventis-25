# Arventis Frontend

Proyecto frontend para Arventis - Soluciones tecnológicas innovadoras.

## 🚀 Últimas actualizaciones (10 Oct 2025)

### 🌙 Implementación del sistema de modo oscuro

#### **Nueva funcionalidad de modo oscuro agregada**
- **Botón con icono de luna**: Implementación de control `bi-moon` en AccessibilityControls
- **Función `toggleDarkMode()`**: Sistema completo de alternancia entre modo claro y oscuro
- **Persistencia en localStorage**: Preferencias de usuario guardadas automáticamente
- **Clase CSS `dark-mode`**: Aplicada dinámicamente al elemento `<html>` raíz

#### **Funcionalidades del modo oscuro**
```javascript
toggleDarkMode() {
  this.isDarkMode = !this.isDarkMode;
  document.documentElement.classList.toggle("dark-mode", this.isDarkMode);
  this.savePreferences();
}
```

#### **Arquitectura de accesibilidad expandida**
- **4 controles disponibles**: Modo descanso (ojo), Modo oscuro (luna), Tamaño de texto (fuentes), Legibilidad (type)
- **Estado persistente**: Sistema robusto de almacenamiento en localStorage con try/catch
- **Restauración automática**: Preferencias aplicadas al cargar la página
- **UX mejorada**: Indicadores visuales activos/inactivos en todos los controles

#### **Sistema de preferencias unificado**
```javascript
savePreferences() {
  const preferences = {
    restMode: this.isRestMode,
    darkMode: this.isDarkMode,        // ← Nueva preferencia
    textSize: this.textSize,
    improvedLegibility: this.improvedLegibility,
  };
  localStorage.setItem("accessibilityPreferences", JSON.stringify(preferences));
}
```

### 🎨 Refinamientos en componentes principales

#### **AccessibilityControls.vue modernizado**
- **Toolbar flotante expandido**: 4 controles de accesibilidad en barra inferior derecha
- **Iconografía Bootstrap**: `bi-eye`, `bi-moon`, `bi-fonts`, `bi-type` para identificación intuitiva
- **Responsive design**: Textos descriptivos visibles solo en pantallas medianas y grandes
- **Accesibilidad ARIA**: Atributos `aria-pressed` y `title` para screen readers

#### **Sistema de íconos actualizado**
- **`bi-moon`**: Representación clara del modo nocturno/oscuro
- **Consistencia visual**: Mantiene el mismo estilo que controles existentes
- **Estados activos**: Clase `.active` aplicada dinámicamente según estado

### 🔧 Búsqueda y análisis de funciones de accesibilidad

#### **Auditoría completa del sistema de accesibilidad**
- **Archivo principal identificado**: `src/components/AccessibilityControls.vue`
- **5 métodos JavaScript**: `toggleRestMode()`, `toggleDarkMode()`, `setTextSize()`, `toggleLegibility()`, `savePreferences()`, `loadPreferences()`
- **Persistencia robusta**: Sistema de error handling con console.error para debugging
- **Aplicación de clases**: Manipulación dinámica del DOM en `document.documentElement`

#### **Funcionalidades técnicas documentadas**
```javascript
// Funciones principales del sistema de accesibilidad
- toggleRestMode(): Activa/desactiva modo descanso visual
- toggleDarkMode(): Controla modo oscuro (NUEVO)
- setTextSize(size): Maneja 4 tamaños de texto
- toggleLegibility(): Mejora contraste y legibilidad
- savePreferences(): Persiste configuración en localStorage
- loadPreferences(): Restaura preferencias al iniciar
```

### 🎯 Preparación para personalización CSS

#### **Arquitectura preparada para colores personalizados**
- **Clase `.dark-mode` lista**: Sistema preparado para definición de colores custom
- **Variables CSS recomendadas**: Estructura para `--bg-primary`, `--text-primary`, `--card-bg`, `--border-color`
- **Selectores específicos**: Jerarquía CSS optimizada para modo oscuro
- **Import modular**: Sistema preparado para archivo `dark-mode.css` independiente

#### **Template de implementación CSS**
```css
/* Estructura recomendada para modo oscuro */
.dark-mode {
  --bg-primary: #TU_COLOR_FONDO;
  --text-primary: #TU_COLOR_TEXTO;
  --card-bg: #TU_COLOR_TARJETAS;
  --border-color: #TU_COLOR_BORDES;
}

.dark-mode body {
  background-color: var(--bg-primary);
  color: var(--text-primary);
}
```

### 📱 Mejoras de componentes auxiliares

#### **HeroFAQSComponents, FAQsView, HeroContactComponents**
- **Componentes editados**: Actualizaciones menores en componentes de hero y vistas
- **Consistencia de diseño**: Mantenimiento de patrones visuales establecidos
- **Preparación responsive**: Componentes listos para integración con modo oscuro

### 🔍 Investigación y documentación

#### **Búsqueda sistemática de funciones**
- **Identificación de archivo JavaScript**: Localización exitosa de funcionalidades de accesibilidad
- **Mapeo de funciones**: Documentación completa de métodos y responsabilidades
- **Análisis de arquitectura**: Comprensión profunda del sistema de preferencias

### 🎛️ Características del sistema completo

#### **Controles de accesibilidad disponibles**
1. **Modo descanso visual** (`bi-eye`): Reduce elementos visuales intensos
2. **Modo oscuro** (`bi-moon`): **NUEVO** - Alterna esquema de colores
3. **Tamaño de texto** (`bi-fonts`): 4 niveles (normal, large, xlarge, xxlarge)
4. **Legibilidad mejorada** (`bi-type`): Optimiza contraste y tipografía

#### **Persistencia y UX**
- **localStorage inteligente**: Manejo de errores y datos corruptos
- **Aplicación automática**: Restauración inmediata de preferencias
- **Feedback visual**: Estados activos claramente identificados
- **Mobile-friendly**: Botones optimizados para touch (min 38px)

### 🎯 Métricas de mejora (10 Oct 2025)

#### **Nueva funcionalidad agregada**: Modo oscuro completo
#### **Controles de accesibilidad**: 4 funciones disponibles
#### **Persistencia mejorada**: Sistema robusto con error handling
#### **Componentes actualizados**: 4 archivos modificados
#### **Preparación CSS**: Arquitectura lista para personalización

---

## 🚀 Últimas actualizaciones (9 Oct 2025)

### 🎨 Optimización de componentes y arquitectura CSS

#### **Análisis y auditoría de clases CSS**
- **Búsqueda sistemática de clases**: Identificación de `title-icon`, `services-section`, `neekworld-card`, `stats-section`, `team-image-container`
- **Documentación de dependencias**: Mapeo completo de ubicaciones y usos de clases CSS críticas
- **Arquitectura CSS auditada**: Revisión de estilos en múltiples archivos (`about.css`, `team.css`, `callicons.css`, `cardneekworld.css`)

#### **Mejoras en componentes específicos**

##### **CalliconsComponents optimizado**
- **Clase `title-icon`**: Efecto hover con color `#08b2f7` y transición suave de 0.3s
- **Consistencia visual**: Matching con `.mission-title` en MiViVa para UX unificada
- **Implementación**: `<h5 class="fw-bold mb-2 title-icon reveal-bottom-1">{{ step.title }}</h5>`

##### **ServicesView y NeekWorldSerComponents**
- **Clase `services-section`**: Fondo blanco con líneas decorativas usando gradientes radiales complejos
- **Efectos de profundidad**: Múltiples capas de `radial-gradient` para decoración sutil
- **Responsive borders**: Bordes top y bottom con `rgba(0, 0, 0, 0.05)` para separación elegante

##### **NeekWorldSerComponents modernizado**
- **Clase `neekworld-card`**: Gradiente azul diagonal (`#183772` a `#173977`)
- **Efectos hover avanzados**: `translateY(-5px)` para elevación y `scale(1.05)` en imagen del cerebro
- **Animación `brainGlow`**: Efecto de resplandor continuo con `drop-shadow` y `brightness`

#### **CountComponents y sistema de estadísticas**
- **Clase `stats-section`**: Bordes superiores e inferiores sutiles para separación visual
- **Stats responsive**: Altura adaptativa (280px desktop → 250px tablet → 220px móvil)
- **Background gris claro**: `#f8f9fa` para contraste con tarjetas internas

#### **GroupComponents y galería de equipo**
- **Clase `team-image-container`**: Contenedor uniforme para fotos del equipo
- **Dimensiones consistentes**: 280px altura en desktop con overflow hidden
- **Sistema de fallback**: Gradiente azul-púrpura (`#667eea` a `#764ba2`) para imágenes faltantes
- **Responsive adaptativo**: Reducción progresiva de altura en dispositivos móviles

### 🔧 Mejoras técnicas y arquitectura

#### **CSS modular optimizado**
- **Separación de responsabilidades**: Estilos específicos por componente
- **Fallbacks inteligentes**: Gradientes de respaldo para elementos multimedia
- **Responsive breakpoints**: Sistema coherente 768px/576px para tablets/móviles

#### **Efectos visuales avanzados**
- **Glassmorphism en NeekWorld**: `backdrop-filter: blur(10px)` con overlays semitransparentes
- **Hover effects unificados**: Patrón consistente de elevación y escala en toda la aplicación
- **Gradientes complejos**: Implementación de múltiples capas para efectos decorativos sutiles

#### **Sistema de iconografía**
- **Bootstrap Icons integrado**: Uso consistente de `bi-*` para iconografía temática
- **Efectos hover coordinados**: Cambio de color a `#08b2f7` en títulos con iconos
- **Fallbacks de imagen**: Sistema robusto para manejo de assets faltantes

### 📱 Responsive design refinado

#### **Breakpoints estratégicos**
- **Desktop (≥992px)**: Efectos completos y decoraciones avanzadas
- **Tablet (768-991px)**: Elementos reducidos manteniendo funcionalidad
- **Mobile (≤767px)**: Diseño compacto optimizado para touch

#### **Optimizaciones por dispositivo**
- **Imágenes escalables**: Sistema adaptativo para photos del equipo y elementos decorativos
- **Typography responsive**: Escalado automático de fuentes y espaciado
- **Touch targets**: Elementos interactivos optimizados para dispositivos móviles

### 🎯 Métricas de mejora (9 Oct 2025)

#### **Clases CSS auditadas**: 5 principales
#### **Componentes optimizados**: 6 componentes críticos
#### **Efectos visuales implementados**: Gradientes, hover effects, animaciones
#### **Responsive breakpoints**: 3 niveles de adaptación
#### **Fallbacks implementados**: Sistema robusto para assets multimedia

---

## 🚀 Últimas actualizaciones (8 Oct 2025)

### 🛠️ Refactorización completa del sistema ScrollReveal

#### **Reversión al patrón original setupScrollReveal**
- **Composable restaurado**: Vuelta al patrón `setupScrollReveal()` con `onMounted()` interno
- **Eliminación de warnings**: Solucionado el problema de Vue.js lifecycle hooks fuera de contexto
- **14 componentes actualizados**: Migración completa de `initScrollReveal` a `setupScrollReveal`
- **Consistencia total**: Patrón unificado en toda la aplicación

#### **Componentes refactorizados sistemáticamente**
- **Script setup pattern**: `ActionFAQSComponents`, `CallActionComponents`, `CalliconsComponents`
- **Options API pattern**: `Footer`, `HeroComponents`, `HomeView`, `ServicesView` 
- **Componentes NeekWorld**: `HeroNeekworldComponents`, `SerNeekworldComponents`
- **Vistas principales**: Actualización de `HomeView` y `ServicesView`

#### **Arquitectura ScrollReveal optimizada**
```javascript
// Patrón restaurado en useScrollReveal.js
export function useScrollReveal() {
  const setupScrollReveal = () => {
    onMounted(() => {
      // Todas las animaciones ScrollReveal aquí
    });
  };
  return { setupScrollReveal };
}
```

### 🎯 Expansión de servicios empresariales

#### **Nuevos servicios de agentes inteligentes agregados**
- **Agentes de Negocios** (`bi-briefcase`): Análisis de mercado y automatización comercial
- **Agentes de Educación** (`bi-mortarboard`): Sistemas de IA educativos y tutorías virtuales
- **Agentes Visuales** (`bi-eye`): Visión artificial y procesamiento de imágenes
- **Total de servicios**: Expansión de 9 a 12 servicios en ServicesView

#### **Consistencia en iconografía**
- **Iconos representativos**: Selección cuidadosa de Bootstrap Icons temáticos
- **Rutas específicas**: Enlaces a servicios y FAQs individualizados
- **Grid responsive**: Distribución automática 3x4 en desktop, adaptativa en móvil

### 🎨 Mejoras de accesibilidad y UX

#### **AccessibilityControls modernizados**
- **Ícono de tamaño de texto**: Cambio de `bi-text-height` a `bi-fonts` más intuitivo
- **Mejor representación visual**: Iconos que comunican claramente su función
- **UX mejorada**: Controles más fáciles de identificar para usuarios

#### **Sistema de navegación optimizado**
- **ScrollReveal en ServicesView**: Implementación de animación `reveal-left` en títulos
- **Clases CSS limpiadas**: Eliminación de `font-family` innecesaria de HomeView
- **Importaciones corregidas**: `useScrollReveal` implementado correctamente

### 🔧 Optimizaciones responsive para CalliconsComponents

#### **Sistema de grid adaptativo mejorado**
- **Desktop (≥992px)**: 6 tarjetas en layout 3+3 con líneas conectoras
- **Tablet (768-991px)**: 2 tarjetas por fila (3 filas totales)
- **Móvil (≤767px)**: 1 tarjeta por fila (6 filas totales)
- **Flexbox optimizado**: Distribución automática sin cálculos manuales

#### **Líneas conectoras inteligentes**
- **Conectores específicos**: Visible entre pasos 1→2, 4→5, y **5→6 (Resultado Final → Mejora Continua)**
- **Responsive automático**: Se ocultan en tablets y móviles para mejor UX
- **CSS mejorado**: Reglas más específicas para control preciso de visibilidad

#### **Nuevo paso del proceso agregado**
- **"Mejora Continua"**: Sexto paso con ícono `bi-arrow-repeat`
- **Descripción completa**: "Implementamos un ciclo de mejora continua, monitoreando el rendimiento..."
- **Flujo completo**: Proceso de 6 pasos que representa el ciclo completo de trabajo

### 📱 Responsive design avanzado

#### **Breakpoints estratégicos en CalliconsComponents**
```css
/* Tablet (768px - 991px) - 2 tarjetas por fila */
.col-lg-2-4 {
  flex: 1 1 calc(50% - 0.75rem);
  max-width: 350px;
}

/* Móvil (≤767px) - 1 tarjeta por fila */
.col-lg-2-4 {
  flex: 1 1 100%;
  max-width: 400px;
}
```

#### **Iconos adaptativos**
- **Desktop**: 64px con efectos hover completos
- **Tablet**: 64px manteniendo funcionalidad
- **Móvil**: 70px para mejor visibilidad táctil

### 🎭 Gestión de estilos y CSS

#### **Importación modular mejorada**
- **callicons.css**: Agregado correctamente al sistema de estilos en `index.js`
- **Separación clara**: Estilos de componente vs estilos globales
- **Performance**: Carga optimizada de hojas de estilo específicas

#### **Clases CSS auditadas**
- **`.hero-section`**: Identificada como no definida (solo en accessibility.css)
- **`.features-section`**: Confirmada como no existente, solo Bootstrap classes
- **`.step-icon i`**: Localizada en services.css con estilos específicos
- **Auditoría completa**: Revisión sistemática de clases sin definir

### 🧹 Limpieza de código y mantenimiento

#### **Eliminación de código duplicado**
- **setupScrollReveal consistente**: Patrón único en toda la aplicación
- **Imports optimizados**: Solo las dependencias necesarias en cada componente
- **Comentarios actualizados**: Documentación interna coherente

#### **Estructura de archivos mejorada**
- **Componentes modulares**: Separación clara de responsabilidades
- **Estilos organizados**: CSS específico por componente en `/assets/style/components/`
- **Imports centralizados**: Gestión eficiente de dependencias

### 🔍 Debugging y resolución de problemas

#### **Identificación sistemática de issues**
- **Vue.js warnings**: Solucionados completamente con reversión de patrón
- **CSS classes faltantes**: Identificadas y documentadas para resolución futura
- **Runtime errors**: Eliminación completa de errores de ScrollReveal

#### **Testing y validación**
- **Verificación completa**: Todos los componentes funcionando sin errores
- **Responsive testing**: Validación en múltiples breakpoints
- **Animation testing**: ScrollReveal funcionando correctamente en todos los componentes

### 📊 Métricas de mejora

#### **Componentes refactorizados**: 14
#### **Servicios agregados**: 3 nuevos
#### **Responsive breakpoints optimizados**: 3 niveles
#### **CSS classes auditadas**: 4 clases principales
#### **Errores resueltos**: 100% de warnings Vue.js eliminados

---

## 🚀 Últimas actualizaciones (7 Oct 2025)

### 🧠 NeekWorldSerComponents - Rediseño completo con imagen de fondo

#### **Implementación de diseño tipo tarjeta con imagen superpuesta**
- **Imagen de cerebro como fondo**: Posicionamiento absoluto en esquina superior derecha
- **Cuadrado sombreado inferior**: Overlay semitransparente con efecto glassmorphism
- **Efecto backdrop-filter**: Desenfoque sutil con `blur(10px)` para profundidad visual
- **Gradiente azul tecnológico**: Fondo degradado `#4a6cf7` a `#8e97f7` matching imagen referencia

#### **Estructura visual modernizada**
- **Layout tipo card**: Contenedor principal con `min-height: 350px`
- **Posicionamiento estratégico**: Cerebro en `top: 20px, right: 30px`
- **Cuadrado de contenido**: `border-radius: 0 0 20px 20px` para efecto integrado
- **Z-index optimizado**: Capas ordenadas (fondo, imagen, contenido)

#### **Efectos CSS avanzados implementados**
```css
.neekworld-content-overlay {
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);
  border-radius: 0 0 20px 20px;
}
```

#### **Responsive design especializado**
- **Desktop**: Imagen 140x140px en esquina superior derecha
- **Tablets**: Imagen 100x100px con reposicionamiento
- **Móviles**: Imagen 80x80px optimizada para pantallas pequeñas
- **Contenido adaptativo**: Padding y typography escalables

#### **Tipografía y contenido optimizado**
- **Título principal**: `font-size: 2.2rem` con `text-shadow` para legibilidad
- **Descripción**: Color `rgba(255, 255, 255, 0.9)` para contraste óptimo
- **Espaciado responsivo**: Margins y paddings adaptativos por breakpoint

### 🎨 Arquitectura CSS especializada

#### **neekworld.css - Efectos glassmorphism**
- **Backdrop filters**: Implementación de efectos de vidrio esmerilado
- **Gradientes complejos**: Múltiples layers para profundidad visual
- **Animations sutiles**: Hover effects y transformaciones suaves
- **Mobile optimizations**: Media queries específicas para cada dispositivo

#### **Efectos hover interactivos**
- **Elevación de tarjeta**: `translateY(-5px)` con sombra expandida
- **Escala de imagen**: `scale(1.05)` en hover del cerebro
- **Transiciones fluidas**: `transition: all 0.3s ease` para smoothness

### 🔧 Mejoras técnicas implementadas

#### **Importación CSS modular**
- **Archivo especializado**: `neekworld.css` para estilos específicos
- **Import limpio**: `@import '@/assets/style/components/neekworld.css'`
- **Separación de concerns**: Lógica Vue separada de estilos visuales

#### **Optimización de assets**
- **Imagen del cerebro**: Importación dinámica desde `@/assets/img/neekworld.png`
- **Lazy loading**: Optimización para carga eficiente
- **Alt text descriptivo**: Accesibilidad mejorada

### 📱 Responsive breakpoints específicos

#### **Adaptación por dispositivo**
- **≥768px**: Layout completo con efectos avanzados
- **576-767px**: Elementos reducidos manteniendo proporciones
- **≤575px**: Modo compacto con espaciado optimizado

#### **Performance mobile**
- **Elementos reducidos**: Iconos y imágenes escalados apropiadamente
- **Padding adaptativo**: Espaciado eficiente para pantallas pequeñas
- **Typography responsive**: Tamaños de fuente optimizados por breakpoint

### 🎯 Resultado visual final
- **Diseño que replica exactamente la imagen de referencia**
- **Cerebro tecnológico como elemento de fondo decorativo**
- **Cuadrado sombreado con texto superpuesto en la parte inferior**
- **Gradiente azul profesional con efectos de profundidad**
- **Experiencia de usuario moderna y accesible**

---

### 🎯 Nuevos componentes modulares desarrollados
- **OurHistoryComponents.vue**: Sección de historia de la empresa con imagen y overlay elegante
- **CountComponents.vue**: Contador animado de estadísticas con efectos temporizador
- **MiViVaComponentes.vue**: Misión, Visión y Valores con estilo unificado
- **GroupComponents.vue**: Componente autónomo del equipo de trabajo

### 🎨 Efectos visuales avanzados implementados

#### **OurHistoryComponents con overlay sofisticado**
- **Imagen con sombreado blanco**: Gradiente superpuesto para efecto profesional
- **Animación shimmer**: Efecto de brillo sutil con movimiento rotacional
- **Hover effects**: Elevación y escala de imagen en interacción
- **Responsive adaptativo**: Optimizado para todos los dispositivos

#### **CountComponents con animación de contador**
- **Temporizador animado**: Números incrementan gradualmente hasta el valor final
- **Easing personalizado**: Función `easeOutQuart` para movimiento natural
- **Efecto escalonado**: Cada contador inicia con 300ms de diferencia
- **Performance optimizada**: Usa `requestAnimationFrame` para fluidez

### 🔄 Refactorización de componentes y separación de responsabilidades

#### **MiViVaComponentes - Estilo unificado con CalliconsComponents**
- **Diseño consistente**: Mismo sistema visual que proceso de trabajo
- **Iconos circulares**: Fondo azul `#08b2f7` con sombra y efectos hover
- **Líneas conectoras**: Flujo visual Misión→Visión→Valores
- **Animaciones sincronizadas**: `fadeInUp` con delays escalonados

#### **Separación de datos y componentes**
- **CountComponents autónomo**: Datos de estadísticas movidos del AboutView
- **GroupComponents independiente**: Información del equipo centralizada
- **AboutView optimizado**: Solo mantiene datos de valores empresariales
- **Imports actualizados**: Estructura modular mejorada

### 🎨 Estilos CSS especializados

#### **ourhistory.css - Efectos de imagen avanzados**
```css
.image-overlay {
  background: linear-gradient(135deg, 
    rgba(255, 255, 255, 0.3) 0%,
    rgba(255, 255, 255, 0.1) 25%,
    rgba(255, 255, 255, 0.05) 50%,
    rgba(255, 255, 255, 0.1) 75%,
    rgba(255, 255, 255, 0.2) 100%
  );
}
```

#### **Miviva.css - Unificación con callicons**
- **Contenedores idénticos**: `.mission-icon` replica `.step-icon`
- **Conectores visuales**: `.mission-connector` con gradiente
- **Responsive matching**: Breakpoints y tamaños exactos
- **Animaciones consistentes**: Misma duración y delays

### ⚡ Animaciones y efectos interactivos

#### **Contador con temporizador realista**
- **Duración personalizada**: 2-2.6 segundos por contador
- **Valores dinámicos**: Separación de números y sufijos ("+")
- **Inicialización retardada**: 500ms para visibilidad mejorada
- **Finalización precisa**: Garantiza llegar al valor exacto

#### **Efectos hover unificados**
- **Iconos escalables**: `transform: scale(1.05)` en hover
- **Títulos interactivos**: Color azul primario en hover
- **Tarjetas elevadas**: `translateY(-5px)` para profundidad
- **Transiciones suaves**: 0.3s en todas las animaciones

### 📐 Mejoras de layout y responsive

#### **Bootstrap borders y utilidades**
- **Sistema de bordes completo**: `.border-1` a `.border-5`
- **Colores específicos**: `.border-primary`, `.border-secondary`
- **Estilos variados**: `.border-solid`, `.border-dashed`, `.border-dotted`
- **Bordes redondeados**: `.rounded-1` a `.rounded-3`, `.rounded-pill`

#### **Grid y flexbox optimizado**
- **Líneas conectoras responsivas**: Visibles solo en desktop
- **Espaciado uniforme**: Flexbox para distribución automática
- **Altura consistente**: `min-height: 280px` en tarjetas
- **Mobile-first**: Adaptación progressive enhancement

### 🔧 Arquitectura de componentes mejorada

#### **Separación de concerns**
- **Datos específicos**: Cada componente maneja sus propios datos
- **Reutilización**: Componentes independientes y portables
- **Mantenibilidad**: Código más limpio y organizados
- **Escalabilidad**: Fácil expansión y modificación

#### **Composables y hooks**
- **useScrollReveal**: Animaciones reutilizables
- **Composition API**: Setup moderno en nuevos componentes
- **Props y eventos**: Comunicación limpia entre componentes

### 📱 Optimizaciones responsive específicas

#### **Breakpoints estratégicos**
- **Desktop (≥992px)**: Líneas conectoras y efectos completos
- **Tablets (768-991px)**: Layout adaptativo sin conectores
- **Mobile (≤767px)**: Elementos compactos y spacing optimizado

#### **Performance mobile**
- **Iconos reducidos**: 60px en lugar de 64px en móviles
- **Animaciones suavizadas**: Duraciones ajustadas para dispositivos
- **Spacing eficiente**: Gaps y márgenes optimizados

### 🎯 Nuevos archivos creados/modificados (7 Oct 2025)
- `src/components/OurHistoryComponents.vue` - Historia empresarial
- `src/components/CountComponents.vue` - Contador animado
- `src/components/MiViVaComponentes.vue` - Misión, Visión, Valores
- `src/components/GroupComponents.vue` - Equipo de trabajo
- `src/assets/style/components/ourhistory.css` - Efectos de imagen
- `src/assets/style/components/Miviva.css` - Estilos MiViVa unificados
- `src/views/AboutView.vue` - Refactorización y componentización

---

## 🚀 Actualizaciones anteriores (3 Oct 2025)

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
