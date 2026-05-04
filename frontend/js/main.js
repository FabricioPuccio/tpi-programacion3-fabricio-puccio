// Referencias al DOM
const lista = document.getElementById('lista-categorias');
const contenedor = document.querySelector('#contenedor-productos');

const cargarCategorias = () => {
    categorias.forEach(categoria => {
        const li = document.createElement('li');
        li.innerHTML = `<a href="#">${categoria}</a>`;
        lista.appendChild(li);
    });
}

function cargarProductos() {
    
    productos.forEach(producto => {
        const article = document.createElement('article');

        // Clase asignada dinámicamente
        article.className = 'producto';

        article.innerHTML = `
            <h3>${producto.nombre}</h3>
            <img src="${producto.imagen}" alt="${producto.nombre}"/>
            <p>${producto.descripcion}</p>
            <p class="precio">$ ${producto.precio}</p>
            <button type="button" class="btn-agregar">Agregar al carrito</button>
        `;

        const boton = article.querySelector('.btn-agregar');
        boton.addEventListener('click', () => {
            alert(`Producto agregado: ${producto.nombre}`);
        });

        contenedor.appendChild(article);
    });
}

// Esperar a que el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    cargarCategorias();
    cargarProductos();
});