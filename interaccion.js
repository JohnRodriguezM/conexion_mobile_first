var input1 = document.getElementById("boton_js1")
var input2 = document.getElementById("boton_js2")
var input3 = document.getElementById("boton_js3")
var input4 = document.getElementById("boton_js4")
var input5 = document.getElementById("boton_js5")


var checkbox1 = document.getElementById("checkbox1")
var checkbox2 = document.getElementById("checkbox2")
var checkbox3 = document.getElementById("checkbox3")
var checkbox4 = document.getElementById("checkbox4")
var checkbox5 = document.getElementById("checkbox5")


var escucha1 = checkbox1.addEventListener("click",traer_Valor1)
var escucha2 = checkbox2.addEventListener("click",traer_Valor2)
var escucha3 = checkbox3.addEventListener("click",traer_Valor3)
var escucha4 = checkbox4.addEventListener("click",traer_Valor4)
var escucha5 = checkbox5.addEventListener("click",traer_Valor5)

function traer_Valor1(){
    if(input1.value == 1){
        document.getElementById("parrafo_js").innerHTML = "Seguiremos mejorando para ti, pon tu recomendaciones abajo"
    }else{
        document.getElementById("parrafo_js").innerHTML = "Pon el número en la casilla adecuada"
    }
}


function traer_Valor2(){
    if(input2.value == 2){
        document.getElementById("parrafo_js").innerHTML = "Gracias por la puntuación, deja tus recomendaciones abajo"
    }else{
        document.getElementById("parrafo_js").innerHTML = "Pon el número en la casilla adecuada"
    }
}


function traer_Valor3(){
    if(input3.value == 3){
        document.getElementById("parrafo_js").innerHTML = "Nos esforzaremos mas, deja tus recomendaciones abajo"
    }else{
        document.getElementById("parrafo_js").innerHTML = "Pon el número en la casilla adecuada"
    }
}


function traer_Valor4(){
    if(input4.value == 4){
        document.getElementById("parrafo_js").innerHTML = "Gracias, un paso mas adelante, deja tus recomendaciones abajo"
    }else{
        document.getElementById("parrafo_js").innerHTML = "Pon el número en la casilla adecuada"
    }
}


function traer_Valor5(){
    if(input5.value == 5){
        document.getElementById("parrafo_js").innerHTML = "Excelente, visita mas nuestras páginas"
    }else{
        document.getElementById("parrafo_js").innerHTML = "Pon el número en la casilla adecuada"
    }
}