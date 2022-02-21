let botonNext = document.getElementById("btnNext");/* crear variable*/

    /* esto es el array para crear las preguntas*/
let pronouns = ["I", "You", "He", "She", "It", "We", "You", "They"]
let possesive = ["My","Your","His","Her","Its","Our","Your","Their"]





test()







function test(){
    /*creo un numero aleatorio */
    num = generate(0,7);


   /* con esto inserto en el html */
    let respuestaCorecta = document.getElementById("question").innerHTML=pronouns[num];
}

/*boton confirmar */
let btnConfirm = document.getElementById("btnConfirm");


/* evento para el boton de confirmar*/
btnConfirm.addEventListener("click", function(){
    let respuestaUser= document.getElementById("respuestaUsuario").value
    
    if(respuestaUser== possesive[num]){
            console.log("Correcto!")
            test()   
            document.getElementById("respuestaUsuario").value=""

    }else{
        console.log("incorrecto")
    }
})
/* evento para el boton de confirmar*/


/*funcion para generar num automatico */
function generate (min,max){
    return Math.round( Math.random() * (max - min) + min) ;
}





