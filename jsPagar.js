document.addEventListener("DOMContentLoaded", function () {
    var cantidadInput = document.getElementById("cant");
    var categoriaSelect = document.getElementById("categ");
    var totalSpan = document.getElementById("total");
    var resumenButton = document.getElementById("resumen");
    var borrarButton = document.getElementById("borrar");


    resumenButton.addEventListener("click", function (event) {
        event.preventDefault(); // Evita que el formulario se envíe

        calcularTotal();
    });


    borrarButton.addEventListener("click", function () {
        totalSpan.textContent = "Total a pagar: $"; // Restablece el contenido
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