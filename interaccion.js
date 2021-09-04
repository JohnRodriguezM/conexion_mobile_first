var input1 = document.getElementById("boton_js1")
var checkbox1 = document.getElementById("checkbox1")
var escucha1 = checkbox1.addEventListener("click",traer_Valor1)

function traer_Valor1(){
    if(input1.value = 1){
        document.getElementById("parrafo_js").innerHTML = "seguiremos mejorando"
    }
}