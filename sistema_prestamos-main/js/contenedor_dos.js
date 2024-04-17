//Variable Global
let pantallitaMonto = document.getElementById('pantalla2')

//Función para agregarPalabras en la pantalla Monto
function agregarNumero(numero){
    pantallitaMonto.value += numero
}


function borrarNumero(){
    //Codigo para borrar todo de una sola la cajita
    //document.getElementById('pantalla').value =''

    //Codigo para borrar cada palabra
    pantallitaMonto.value = pantallitaMonto.value.slice(0, -1)

}

function borrartodo(){
    document.getElementById('pantalla2').value =''
}
