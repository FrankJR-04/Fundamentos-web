localStorage.setItem("lista", JSON.stringify(productos));

let tarjeta = JSON.parse(localStorage.getItem("lista")) || [];

let productContainer = document.querySelector('.product-container');

let currentIndex = 0;
let itemsPerLoad = 15; 

function cargarProductos() {
    let productosACargar = tarjeta.slice(currentIndex, currentIndex + itemsPerLoad);
    
    if (productosACargar.length === 0) {
        let finMensaje = document.createElement('p');
        finMensaje.textContent = 'No hay más productos por cargar.';
        finMensaje.classList.add('fin-mensaje');
        productContainer.appendChild(finMensaje);
        return;
    }

    productosACargar.forEach(producto => {
        let productCard = document.createElement('div');
        productCard.classList.add('product-card');
        
        let productImagen = document.createElement('img');
        productImagen.src = producto.imagen; 
        productImagen.alt = producto.nombre;
        productImagen.classList.add('product-image');
        productCard.appendChild(productImagen);
        
        let productNombre = document.createElement('h2');
        productNombre.textContent = producto.nombre;
        productNombre.classList.add('product-name');
        productCard.appendChild(productNombre);
        
        let productPrecio = document.createElement('p');
        productPrecio.textContent = `$${producto.precio}`;
        productPrecio.classList.add('product-price');
        productCard.appendChild(productPrecio);
        
        let productDisponibilidad = document.createElement('p');
        productDisponibilidad.textContent = producto.disponibilidad;
        productDisponibilidad.classList.add('product-disponibilidad');
        productCard.appendChild(productDisponibilidad);
        
        let detailsButton = document.createElement('button');
        detailsButton.textContent = "Detalles";
        detailsButton.classList.add('details-button');
        productCard.appendChild(detailsButton);
        
        let detailsContainer = document.createElement('div');
        detailsContainer.classList.add('product-details');
        detailsContainer.style.display = 'none';
                
        detailsButton.addEventListener("click", () => {
            if (detailsContainer.style.display === 'none') {
                detailsContainer.style.display = 'block'; 
            } else {
                detailsContainer.style.display = 'none'; 
            }
            detailsButton.textContent = detailsContainer.style.display === 'none' ? 'Detalles' : 'Ocultar detalles';
        });
        
        let productDescripcion = document.createElement('p');
        productDescripcion.textContent = `Descripción: ${producto.descripcion}`;
        productDescripcion.classList.add('product-descripcion');
        detailsContainer.appendChild(productDescripcion);
        
        let productModelo = document.createElement('p');
        productModelo.textContent = `Modelo: ${producto.modelo}`;
        productModelo.classList.add('product-modelo');
        detailsContainer.appendChild(productModelo);
        
        let productMarca = document.createElement('p');
        productMarca.textContent = `Marca: ${producto.marca}`;
        productMarca.classList.add('product-marca');
        detailsContainer.appendChild(productMarca);
        
        let inputCantidad = document.createElement('input');
        inputCantidad.placeholder = "Cantidad:";
        inputCantidad.classList.add('input-cantidad');
        inputCantidad.setAttribute('type', 'number');
        detailsContainer.appendChild(inputCantidad);
        
        let carritoButton = document.createElement('button');
        carritoButton.textContent = "Agregar al carrito de compra";
        carritoButton.classList.add('carrito-button');
        detailsContainer.appendChild(carritoButton);
        
        productCard.appendChild(detailsContainer);
        
        productContainer.appendChild(productCard);
    });

    currentIndex += itemsPerLoad;

    vincularBotonesCarrito();
}

function vincularBotonesCarrito() {
    let agregarBotones = document.querySelectorAll('.carrito-button');
    
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    
    let agregarCarrito = (event) => {
        event.preventDefault();
        
        let productoContainer = event.target.closest('.product-card');
        
        let cantidadInput = productoContainer.querySelector('.input-cantidad');
        let cantidad = parseInt(cantidadInput.value, 10);
        if (isNaN(cantidad) || cantidad < 1) {
            alert("La cantidad tiene que ser un número positivo");
            return;
        }

        let imagen = productoContainer.querySelector('.product-image').src;
        let nombre = productoContainer.querySelector('.product-name').textContent;
        let precio = productoContainer.querySelector('.product-price').textContent;
        let disponibilidad = productoContainer.querySelector('.product-disponibilidad').textContent;
        let descripcion = productoContainer.querySelector('.product-descripcion').textContent;
        let marca = productoContainer.querySelector('.product-marca').textContent;
        let modelo = productoContainer.querySelector('.product-modelo').textContent;
        
        let producto = {
            imagen, nombre, precio, disponibilidad, descripcion, marca, modelo, cantidad
        };
        
        carrito.push(producto);
        
        localStorage.setItem('carrito', JSON.stringify(carrito));
        
        alert(`Se agregaron ${cantidad} ${nombre} al carrito.`);
    }
    
    agregarBotones.forEach(boton => boton.addEventListener('click', agregarCarrito));
}

cargarProductos();

function verificarScroll() {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        cargarProductos(); 
    }
}

window.addEventListener('scroll', verificarScroll);

// Filtros
let filtroDisponibilidad = document.getElementById('filtro-disponibilidad');
let filtroMarca = document.getElementById('filtro-marca');

let filtrarProductos = (event) => {
    event.preventDefault();
    let productosFiltrados = tarjeta; 
    
    let disponibilidadSeleccionada = filtroDisponibilidad.value;
    if (disponibilidadSeleccionada !== 'todos') {
        productosFiltrados = productosFiltrados.filter(producto => 
            producto.disponibilidad.toLowerCase() === disponibilidadSeleccionada.toLowerCase()
        );
    }
    let marca = filtroMarca.value.toLowerCase().trim();
    if (marca) {
        productosFiltrados = productosFiltrados.filter(producto => 
            producto.marca.toLowerCase().includes(marca)
        );
    }
    
    renderizarProductos(productosFiltrados);
}

filtroDisponibilidad.addEventListener('change', filtrarProductos);
filtroMarca.addEventListener("keyup", filtrarProductos);

let avanzarButton = document.querySelector('.avanzar-button');
let regresarButton = document.querySelector('.regresar-button');

let regresar = (event) => {
    event.preventDefault();
window.location.href = "/proyecto_final/index.html";
localStorage.clear(); 
alert ("Lamentamos los inconvenientes, regresarás a la página principal.");
}
let avanzar = (event) => {
    event.preventDefault();
window.location.href = "/proyecto_final/pages/list.html";
}

avanzarButton.addEventListener("click",avanzar);
regresarButton.addEventListener("click",regresar);

function renderizarProductos(productos) {
    productContainer.innerHTML = ''; 
    
    productos.forEach(producto => {
        let productCard = document.createElement('div');
        productCard.classList.add('product-card');
        
        let productImagen = document.createElement('img');
        productImagen.src = producto.imagen; 
        productImagen.alt = producto.nombre;
        productImagen.classList.add('product-image');
        productCard.appendChild(productImagen);
        
        let productNombre = document.createElement('h2');
        productNombre.textContent = producto.nombre;
        productNombre.classList.add('product-name');
        productCard.appendChild(productNombre);
        
        let productPrecio = document.createElement('p');
        productPrecio.textContent = `$${producto.precio}`;
        productPrecio.classList.add('product-price');
        productCard.appendChild(productPrecio);
        
        let productDisponibilidad = document.createElement('p');
        productDisponibilidad.textContent = producto.disponibilidad;
        productDisponibilidad.classList.add('product-disponibilidad');
        productCard.appendChild(productDisponibilidad);
        
        let detailsButton = document.createElement('button');
        detailsButton.textContent = "Detalles";
        detailsButton.classList.add('details-button');
        productCard.appendChild(detailsButton);
        
        let detailsContainer = document.createElement('div');
        detailsContainer.classList.add('product-details');
        detailsContainer.style.display = 'none';  
                
        detailsButton.addEventListener("click", () => {
            if (detailsContainer.style.display === 'none') {
                detailsContainer.style.display = 'block'; 
            } else {
                detailsContainer.style.display = 'none'; 
            }
            detailsButton.textContent = detailsContainer.style.display === 'none' ? 'Detalles' : 'Ocultar detalles';
        });
        
        let productDescripcion = document.createElement('p');
        productDescripcion.textContent = `Descripción: ${producto.descripcion}`;
        productDescripcion.classList.add('product-descripcion');
        detailsContainer.appendChild(productDescripcion);
        
        let productModelo = document.createElement('p');
        productModelo.textContent = `Modelo: ${producto.modelo}`;
        productModelo.classList.add('product-modelo');
        detailsContainer.appendChild(productModelo);
        
        let productMarca = document.createElement('p');
        productMarca.textContent = `Marca: ${producto.marca}`;
        productMarca.classList.add('product-marca');
        detailsContainer.appendChild(productMarca);
        
        let inputCantidad = document.createElement('input');
        inputCantidad.placeholder = "Cantidad:";
        inputCantidad.classList.add('input-cantidad');
        inputCantidad.setAttribute('type', 'number');
        detailsContainer.appendChild(inputCantidad);
        
        let carritoButton = document.createElement('button');
        carritoButton.textContent = "Agregar al carrito de compra";
        carritoButton.classList.add('carrito-button');
        detailsContainer.appendChild(carritoButton);
        
        productCard.appendChild(detailsContainer);
        
        productContainer.appendChild(productCard);
    });

    vincularBotonesCarrito();
}
