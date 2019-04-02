window.onload = function () {
    banda1 = 0;
    banda2 = 0;
    banda3 = 0;
};
function calcularPreciVenta() {
    var precioCompra = $("#txtprecioCPV").val();
    var Utilidad = $("#txtUtilidadPV").val();
    var Iva = $("#txtIvaPV").val();
    var utilidad = precioCompra * Utilidad / 100;
    var iva = precioCompra * Iva / 100;
    var total = parseInt(precioCompra) + parseInt(utilidad) + parseInt(iva)
    $("#pPrecioVenta").text("Precio de Venta al Publico $" + total + ", La utilidad en esta venta es: $" + utilidad);
}
function calcularR() {
    alert(banda1);
}
function colorBt(color,bt) {
    document.getElementById(bt).style.backgroundColor = color;
}
function calcularResistencia() {
    var value = (banda1 + banda2) * banda3;
    $("#pvalorResistencia").text("El valor de la recistencia es: (" + value+") ohmios");
}