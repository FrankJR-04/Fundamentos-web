// Obtiene el carrito guardado en localStorage, o un array vacío si no existe
let carritoGuardado = JSON.parse(localStorage.getItem('carrito')) || [];

// Selecciona el contenedor donde se agregarán los productos
let containerTable = document.querySelector('.elementos');

// Itera sobre cada producto en el carrito y crea los elementos de la tabla
carritoGuardado.forEach(producto => {
    let fila = document.createElement('tr'); // Crea una fila de la tabla
    fila.classList.add('fila')
    
    // Crea y agrega las celdas para cada dato del producto
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
    
    // Agregar botón para eliminar el producto
    let celdaEliminar = document.createElement('td');
    let eliminarBtn = document.createElement('button');
    eliminarBtn.textContent = "Eliminar";
    eliminarBtn.classList.add('btn-eliminar');
    eliminarBtn.addEventListener('click', () => {
        // Filtrar el producto a eliminar y actualizar el localStorage
        carritoGuardado = carritoGuardado.filter(item => item.nombre !== producto.nombre);
        localStorage.setItem('carrito', JSON.stringify(carritoGuardado));
        fila.remove(); // Elimina la fila de la tabla
    });
    celdaEliminar.appendChild(eliminarBtn);
    fila.appendChild(celdaEliminar);
    
    // Agregar la fila completa al tbody de la tabla
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
    
    // Cambia el valor visual a asteriscos, pero mantiene el valor original en el campo.
    input.setAttribute('data-value', value);
    
    // Reemplaza el contenido visible con asteriscos, según la longitud del texto.
    input.value = "*".repeat(value.length);
}