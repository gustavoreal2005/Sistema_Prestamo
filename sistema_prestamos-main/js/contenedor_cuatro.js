window.addEventListener('load', function() {
    let btnCalcularPrestamos = this.document.getElementById("btnCalcular");
    btnCalcularPrestamos.addEventListener("click", function() {
        //alert("TE MANDO LA MOTO");
    /* 
        Almacenando en una varible
        los datos de pantalla nombre
    */
    let varNombre = document.getElementById("pantalla").value;
    let datosPersonales = varNombre.split(" "); //separa si en caso tiene espacio
    let datosPersonaNombre = datosPersonales[0];
    let datosPersonaApellido = datosPersonales[1];
    /* 
    Almacenando en una variable los datos de pantalla monto
    */
    let varMonto = document.getElementById("pantalla2").value;
    /* LLAMAMOS AL INPUT DEL INTERES */
    let varInteres = document.getElementById("interes").value;

    /* HACIENDO OPERACIONES */
    const interes = varInteres/100;
    const dias = 24;
    let ganancia = varMonto * interes
    let pagoFinal = parseFloat(varMonto) + parseFloat(ganancia)
    let pagoDiario = pagoFinal/dias
    console.log("NOMBRE: " + varNombre)
    console.log("Dinero Prestado: " + varMonto)
    console.log("Interes: " + interes)
    console.log("Dias: " + dias)
    console.log("Monto x Interes: " + ganancia)
    console.log("Pago Final: " + pagoFinal)
    console.log("Diario Pagara: " + pagoDiario)

    /* MOSTRAMOS LOS RESULTADOS DENTRO DEL HTML*/
    let cajaResultado = document.getElementById("cajaResultado")
    cajaResultado.innerHTML = ` <td>${datosPersonaNombre}</td> 
                                <td>${datosPersonaApellido}</td>
                                <td>${varMonto}</td>
                                <td>${varInteres}%</td>
                                <td>${pagoDiario}</td>
                                <td>${dias}</td>
                                <td>${pagoFinal}</td>`
    });
});