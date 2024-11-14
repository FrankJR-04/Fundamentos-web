let carritoGuardado = JSON.parse(localStorage.getItem('carrito')) || [];

let containerTable = document.querySelector('.elementos');

carritoGuardado.forEach(producto => {
    let fila = document.createElement('tr');
    fila.classList.add('fila')
    
    let celdaImagen = document.createElement('td');
    let imagen = document.createElement('img');
    imagen.src = producto.imagen;
    imagen.alt = producto.nombre;
    imagen.classList.add('celda-imagen');
    celdaImagen.appendChild(imagen); 
    fila.appendChild(celdaImagen);
    
    let celdaNombre = document.createElement('td');
    celdaNombre.textContent = producto.nombre;
    celdaNombre.classList.add('celda-nombre');
    fila.appendChild(celdaNombre);
    
    let celdaPrecio = document.createElement('td');
    celdaPrecio.textContent = producto.precio;
    celdaPrecio.classList.add('celda-precio');
    fila.appendChild(celdaPrecio);
    
    let celdaDisponibilidad = document.createElement('td');
    celdaDisponibilidad.textContent = producto.disponibilidad;
    celdaDisponibilidad.classList.add('.celda-disponibilidad');
    fila.appendChild(celdaDisponibilidad);
    
    let celdaCantidad = document.createElement('td');
    celdaCantidad.textContent = producto.cantidad;
    celdaCantidad.classList.add('celda-cantidad');
    fila.appendChild(celdaCantidad);
    
    let celdaEliminar = document.createElement('td');
    let eliminarBtn = document.createElement('button');
    eliminarBtn.textContent = "Eliminar";
    eliminarBtn.classList.add('btn-eliminar');
    eliminarBtn.addEventListener('click', () => {
        carritoGuardado = carritoGuardado.filter(item => item.nombre !== producto.nombre);
        localStorage.setItem('carrito', JSON.stringify(carritoGuardado));
        fila.remove(); 
    });
    celdaEliminar.appendChild(eliminarBtn);
    fila.appendChild(celdaEliminar);
    

    containerTable.appendChild(fila);
});

{
let cancelarCompra = document.querySelector('.cancelar-compra');
let seguirComprando = document.querySelector('.Seguir-comprando');

let cancelar = (event) => {
    event.preventDefault();
window.location.href = "/proyecto_final/index.html";
localStorage.clear(); 
alert ("Lamentamos los inconvenientes, regresarás a la página principal.");
}
let regresar = (event) => {
    event.preventDefault();
window.location.href = "/proyecto_final/pages/productList.html";
}

cancelarCompra.addEventListener("click",cancelar);
seguirComprando.addEventListener("click",regresar);
};

function cambiarLetra() {
    let input = document.getElementById("codigo-seguridad");
    let value = input.value;
    
    input.setAttribute('data-value', value);
    
    input.value = "*".repeat(value.length);
}