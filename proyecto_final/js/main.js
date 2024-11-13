let form = document.getElementById("formulario");
let limpiar_Boton = document.getElementById("limpiar");

let limpiarFormulario = () => {
    document.getElementById("nombre").value = "";
    document.getElementById("presupuestoMaximo").value = "";
    document.getElementById("cantidadMaxima").value = "";
    document.getElementById("direccion").value = "";
    document.getElementById("selector").value = "";
    localStorage.clear();  
};

let enviarFormulario = (event) => {
    event.preventDefault();

    let nombre = document.getElementById("nombre").value;
    let presupuesto = parseFloat(document.getElementById("presupuestoMaximo").value);
    let cantidad = document.getElementById("cantidadMaxima").value;
    let direccion = document.getElementById("direccion").value;
    let selector = document.getElementById("selector").value;


    if (nombre.length > 20) {
        alert("El nombre ingresado no puede superar los 20 caracteres.");
        return;
    }

    if (isNaN(presupuesto) || presupuesto < 1) {
        alert("El presupuesto no puede ser menor que cero.");
        return;
    }

    if (cantidad < 1 || cantidad > 20) {
        alert("La cantidad máxima debe estar entre 1 y 20.");
        return;
    }

    if (direccion.length < 5) {
        alert("Por favor ingrese una dirección real.");
        return;
    }

    // Formato de presupuesto a pesos colombianos
    let presupuestoFormateado = new Intl.NumberFormat('es-CO', { 
        style: 'currency', currency: 'COP' 
    }).format(presupuesto);

    // Guardar en localStorage
    localStorage.setItem("nombre", nombre);
    localStorage.setItem("presupuestoMaximo", presupuestoFormateado);  // Guardar presupuesto formateado
    localStorage.setItem("cantidadMaxima", cantidad);
    localStorage.setItem("direccion", direccion);
    localStorage.setItem("selector", selector);

    window.location.href = "./pages/productList.html";
};

// Recuperar los datos de localStorage al cargar la página
window.addEventListener("load", () => {
    document.getElementById("nombre").value = localStorage.getItem("nombre") || "";
    document.getElementById("presupuestoMaximo").value = localStorage.getItem("presupuestoMaximo") || "";
    document.getElementById("cantidadMaxima").value = localStorage.getItem("cantidadMaxima") || "";
    document.getElementById("direccion").value = localStorage.getItem("direccion") || "";
    document.getElementById("selector").value = localStorage.getItem("selector") || "";
});

limpiar_Boton.addEventListener("click", limpiarFormulario);
form.addEventListener("submit", enviarFormulario);
