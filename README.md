# Trabajo Práctico Integrador
**Versión:** 1.2 - CSS3  

**Alumno:** Fabricio Puccio  
**Materia:** Programación III  
**Institución:** UTN - Facultad Regional San Nicolás  
**Año:** 2026 

---

## 📌 Descripción del Proyecto
Este repositorio contiene el desarrollo completo del Trabajo Práctico Integrador de la materia Programación III. El proyecto abarca desde el frontend estático hasta el backend empresarial, aplicando tecnologías modernas.

---

## 📁 Estructura del Repositorio (Actual)

\`\`\`
tpi-programacion3-fabricio-puccio/
│
├── frontend/                # Aplicación cliente (HTML, CSS, JS/TS)
│   ├── index.html           # Vista pública del catálogo de productos
│   ├── admin.html           # Panel de administración (gestión de productos)
│   ├── login/               # Módulo de autenticación (CSS)
│   │   ├── login.html
│   │   └── login.css
│   ├── assets/              # Recursos estáticos (imágenes)
│       └── img/
├── backend/                 
│   └── ...
│
├── docs/                    # Documentación adicional (diagramas, DER, etc.)
│
├── .gitignore               # Archivos y carpetas ignorados por Git
└── README.md                # Este archivo
\`\`\`

---

## ✅ Estado del Proyecto

| Unidad | Tecnología       | Estado          | Entregable                                                            |
|--------|------------------|-----------------|-----------------------------------------------------------------------|
| 1      | HTML5            | ✅ **Completo** | Estructura semántica de `index.html` y `admin.html`                   |
| 2      | CSS3             | ✅ **Completo** | Página de Login estilizada con variables, Flexbox, BEM y pseudoclases |
| 3      | JavaScript       | ⏳ Pendiente    |                                                                       |
| 4      | TypeScript       | ⏳ Pendiente    |                                                                       |
| 5      | Java + Spring    | ⏳ Pendiente    |                                                                       |

---

## 🚀 Cómo visualizar el proyecto

1.  Cloná el repositorio:
    \`\`\`bash
    git clone https://github.com/FabricioPuccio/tpi-programacion3-fabricio-puccio.git
    \`\`\`

2.  Navegá a la carpeta del frontend:
    \`\`\`bash
    cd tpi-programacion3-fabricio-puccio/frontend
    \`\`\`

3.  Abrí `index.html` o `admin.html` en tu navegador preferido.

4.  Para ver la página de login, abrí `login/login.html`.

---

## 📋 Características Implementadas (Unidad 1)

### Vista del Cliente (`index.html`)
- Estructura semántica completa (`<header>`, `<nav>`, `<main>`, `<aside>`, `<footer>`).
- Barra de navegación con enlaces a secciones y acceso al panel de administración.
- Lista de categorías en barra lateral.
- Buscador de productos (formulario con método `GET`).
- Grilla de productos con al menos 2 artículos (`<article>`) incluyendo imagen, título, descripción y precio.
- Pie de página con información de contacto.

### Vista del Administrador (`admin.html`)
- Panel de gestión con tabla semántica (`<thead>`, `<tbody>`).
- Columnas: ID, Imagen, Nombre, Categoría, Precio, Stock, Acciones.
- Formulario para agregar productos rápidamente (dentro de un elemento `<details>`).
- Validaciones nativas HTML5 (`required`, `type="number"`, etc.).
- Navegación bidireccional entre ambas vistas.

### Accesibilidad y Buenas Prácticas
- Atributos `alt` en todas las imágenes.
- Uso de `lang="es"` para el idioma.
- Etiquetas `<label>` asociadas a campos de formulario.
- Código indentado y comentado para facilitar la lectura.

## 📋 Características Implementadas (Unidad 2 - CSS3)

### Página de Login (`login/login.html`)
- Centrado vertical y horizontal con **Flexbox**.
- Variables globales en `:root` para gestionar colores y tipografía.
- **Metodología BEM** para nomenclatura profesional de clases.
- Pseudoclases `:hover` y `:focus` para interactividad en inputs y botones.
- **Transiciones suaves** (`transition`) en cambios de color y escala.
- Enlace de registro estilizado con texto complementario.
- Archivo CSS externo vinculado con `<link>`.

---

## 👨‍💻 Autor

**Fabricio Puccio**  
Estudiante de la Tecnicatura Universitaria en Programación - UTN FRSN  
[GitHub](https://github.com/FabricioPuccio)

---

*Este proyecto continuará expandiéndose en las próximas unidades de la materia.*