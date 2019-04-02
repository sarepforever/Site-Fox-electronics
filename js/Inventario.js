
window.onload = function () {
    filaEditar = -1;
    Stock = [
        [9111, "Recistencia 6100 ohmios", "R.N.", 600,71],
        [9112, "Recistencia 5100 ohmios", "R.N.", 500, 71],
        [9113, "Recistencia 4100 ohmios", "R.N.", 400, 71]
    ];
    cargartabla();
};
function cargartabla() {
    $("#stock tbody").empty();
    for (var i = 0; i < Stock.length; i++) {
        $("#stock tbody").append(" <tr>" +
            "<td>" + Stock[i][0]+"</td >" +
            "<td>" + Stock[i][1] +"</td>" +
            "<td>" + Stock[i][2] +"</td>" +
            "<td>$"+ Stock[i][3] +"</td>" +
            "<td>" + Stock[i][4] +"</td>" +
            "<td><center><i class='fas fa-edit'onclick='editarProducto(" + i +")'></i> <i class='fas fa-trash-alt'onclick='eliminarItem("+i+")'></i></center></td>" +
            "</tr >")
    }
    
}
function addProducto() {
    $('.help-block').text("");
    $("#contactForm")[0].reset();
    $("#ibtGuardar").text("Guardar");
    $("#txtcodigoP").prop('disabled', false);
    $("#agregarProducto").modal("show")
}
function filtrar() {
    var filtro = $("#filtro").val() + ""
        filtro = filtro.toUpperCase();
    $("#stock tbody").empty(); 
    for (var i = 0; i < Stock.length; i++) {
        var codigo = Stock[i][0] + ""
            codigo = codigo.toUpperCase();
        var nombre = Stock[i][1] + ""
            nombre = nombre.toUpperCase();
        var marca = Stock[i][2] + ""
            marca = marca.toUpperCase();
        var precio = Stock[i][3] + ""
            precio = precio.toUpperCase();
        var cantidad = Stock[i][4] + ""
            cantidad = cantidad.toUpperCase();
        if (codigo.indexOf(filtro) > -1 || nombre.indexOf(filtro) > -1 || marca.indexOf(filtro) > -1 || precio.indexOf(filtro) > -1 || cantidad.indexOf(filtro) > -1) {
        $("#stock tbody").append(" <tr>" +
            "<td>" + Stock[i][0] + "</td >" +
            "<td>" + Stock[i][1] + "</td>" +
            "<td>" + Stock[i][2] + "</td>" +
            "<td>$" + Stock[i][3] + "</td>" +
            "<td>" + Stock[i][4] + "</td>" +
            "<td><center><i class='fas fa-edit'onclick='editarProducto(" + i +")'></i> <i class='fas fa-trash-alt'onclick='eliminarItem(" + i +")'></i></center></td>" +
                "</tr >")
        }
    }

}
function eliminarItem(num)
{
    Stock.splice(num,1);
    cargartabla();
}
function guardarProducto()
{  
    if (filaEditar < 0) {
    Stock.push([$("#txtcodigoP").val(), $("#txtnombreP").val(), $("#txtmarcaP").val(), $("#txtprecioP").val(), $("#txtcantidadP").val()]);
        cargartabla();
    } else {
        Stock.splice(filaEditar, 1, [$("#txtcodigoP").val(), $("#txtnombreP").val(), $("#txtmarcaP").val(), $("#txtprecioP").val(), $("#txtcantidadP").val()])
        cargartabla();
        filaEditar = -1;
    }
    $("#agregarProducto").modal("hide")
}
function editarProducto(num) {
    $('.help-block').text("");
    $('#contactForm').trigger("reset");
    $("#ibtGuardar").text("Actualizar");
    filaEditar = num;
    $("#txtcodigoP").val(Stock[num][0]);
    $("#txtcodigoP").prop('disabled', true);
    $("#txtnombreP").val(Stock[num][1]);
    $("#txtmarcaP").val(Stock[num][2]);
    $("#txtprecioP").val(Stock[num][3]);
    $("#txtcantidadP").val(Stock[num][4]);
    $("#agregarProducto").modal("show")
}
$(function () {

    $("#contactForm input,#contactForm textarea").jqBootstrapValidation({
        preventSubmit: true,
        submitError: function ($form, event, errors) {
            // additional error messages or events
        },
        submitSuccess: function ($form, event) {
            guardarProducto();
            event.preventDefault();
            // prevent default submit behaviour
            // get values from FOR
        },
        filter: function () {
            return $(this).is(":visible");
        },
    });

    $("a[data-toggle=\"tab\"]").click(function (e) {
        e.preventDefault();
        $(this).tab("show");
    });
});
