 window.onload = function () {
    filaEditar = -1;
    Stock = [
        [9111, "Recistencia 6100 ohmios", "R.N.", 600, 71],
        [9112, "Recistencia 5100 ohmios", "R.N.", 500, 71],
        [9113, "Recistencia 4100 ohmios", "R.N.", 400, 71]
    ];
};
function validarCode() {
    $("#alertBien").hide();
    for (var i = 0; i < Stock.length; i++) {
        if (Stock[i][0] == $("#txtCodeProducto").val())
        {
            $("#informacionProducto").text(Stock[i][1] + "-" + Stock[i][2] + " Unidades disponibles (" + Stock[i][4]+")")
            $("#pCodigo").css("display", "none");
            $("#divVentaProducto").show();
           
            numEdit = i;
            break;
        } else {
            $("#divVentaProducto").hide();
            $("#informacionProducto").text("");
            $("#pCodigo").css("display", "block");
        }       
    }
}
function facturar() {
    var cantidad = $("#txtCantidadProducto").val();
    var presio = $("#txtPresioProducto").val()
    if (cantidad > 0 && presio > 1)
    {
        $("#alertError").hide();
        if (cantidad <= Stock[numEdit][4]) {
            $("#alertError").hide();
            cantidadA = Stock[numEdit][4];
            cantidadN = cantidadA - cantidad;
            Stock.splice(numEdit, 1, [Stock[numEdit][0], Stock[numEdit][1], Stock[numEdit][2], Stock[numEdit][3], cantidadN])
            
            $("#txtCantidadProducto").val("")
            $("#txtPresioProducto").val("")
            $("#txtCodeProducto").val("")
            $("#divVentaProducto").hide();
            $("#informacionProducto").text("");
            $("#alertBien").show();
        } else {
            $("#alertError").show();
            $("#texAlertError").text("La orden supero las unidades disponibles.");
        }
    } else {
        $("#alertError").show(); 
        $("#texAlertError").text("Por favor igrese valores reales");
    }
}