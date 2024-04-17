//Variable Global
let pantallitaNombre = document.getElementById('pantalla')

//Función para agregarPalabras en la pantalla nombre
function agregarPalabra(parametro){
    pantallitaNombre.value += parametro
}


function borracadaPalabra(){
    //Codigo para borrar todo de una sola la cajita
    //document.getElementById('pantalla').value =''

    //Codigo para borrar cada palabra
    pantallitaNombre.value = pantallitaNombre.value.slice(0, -1)
}
