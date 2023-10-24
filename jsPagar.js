
const toggleTema = () => {
    const body = document.body;
    const dlIcon = document.querySelector("#dl-icon");
    
    if (body.classList.contains("modo-oscuro")) {
      body.classList.remove("modo-oscuro");
      dlIcon.classList.remove("bi-sun-fill");
      dlIcon.classList.add("bi-moon-fill");
    } else {
      body.classList.add("modo-oscuro");
      dlIcon.classList.remove("bi-moon-fill");
      dlIcon.classList.add("bi-sun-fill");
    }
  }




// document.addEventListener("DOMContentLoaded", function () {
//     var cantidadInput = document.getElementById("cant");
//     var categoriaSelect = document.getElementById("categ");
//     var totalSpan = document.getElementById("total");
//     var resumenButton = document.getElementById("resumen");
//     var borrarButton = document.getElementById("borrar");
   

//     resumenButton.addEventListener("click", function (event) {
//         event.preventDefault(); 

//         calcularTotal();
//     });


//     borrarButton.addEventListener("click", function () {
//         totalSpan.textContent = "Total a pagar: $0.00";
//     });

//     function calcularTotal() {
//         var cantidad = parseInt(cantidadInput.value) || 0;
//         var categoria = categoriaSelect.value;
//         var precio = 200;

//         var descuento = 0;

//         if (categoria === "opcion1") {
//             descuento = 0.8;
//         } else if (categoria === "opcion2") {
//             descuento = 0.5;
//         } else if (categoria === "opcion3") {
//             descuento = 0.15;
//         }

//         var pagoTotal = cantidad * precio * (1 - descuento);

//         totalSpan.textContent = "Total a pagar: $" + pagoTotal.toFixed(2);
//     }
// });

document.addEventListener("DOMContentLoaded", function () {
    var cantidadInput = document.getElementById("cant");
    var categoriaSelect = document.getElementById("categ");
    var totalSpan = document.getElementById("total");
    var resumenButton = document.getElementById("resumen");
    var borrarButton = document.getElementById("borrar");
    var nombreInput = document.querySelector('input[placeholder="Nombre"]');
    var apellidoInput = document.querySelector('input[placeholder="Apellido"]');
    var correoInput = document.querySelector('input[placeholder="Correo"]');
    var mensajeError = document.getElementById("mensaje_error");

    resumenButton.addEventListener("click", function (event) {
        event.preventDefault(); 

        if (nombreInput.checkValidity() && apellidoInput.checkValidity() && correoInput.checkValidity() && cantidadInput.checkValidity()) {
            calcularTotal();
            mensajeError.style.display = "none"; // 
        } else {
            mensajeError.style.display = "block";
        }
    });

    borrarButton.addEventListener("click", function () {
        totalSpan.textContent = "Total a pagar: $0.00"; 
        mensajeError.style.display = "none"; 
    });

    nombreInput.addEventListener("focus", function () {
        mensajeError.style.display = "none";
    });

    apellidoInput.addEventListener("focus", function () {
        mensajeError.style.display = "none"; 
    });

    correoInput.addEventListener("focus", function () {
        mensajeError.style.display = "none";
    });

    function calcularTotal() {
        var cantidad = parseInt(cantidadInput.value) || 0;
        var categoria = categoriaSelect.value;
        var precio = 200;

        var descuento = 0;

        if (categoria === "opcion1") {
            descuento = 0.8;
        } else if (categoria === "opcion2") {
            descuento = 0.5;
        } else if (categoria === "opcion3") {
            descuento = 0.15;
        }

        var pagoTotal = cantidad * precio * (1 - descuento);

        totalSpan.textContent = "Total a pagar: $" + pagoTotal.toFixed(2);
    }
});