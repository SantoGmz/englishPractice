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
            test()   
            document.getElementById("respuestaUsuario").value=""

    }else{
        alert("Incorrect!")
    }
})
/* evento para el boton de confirmar*/

/*funcion para generar num automatico */
function generate (min,max){
    return Math.round( Math.random() * (max - min) + min) ;
}


btnConfirm.addEventListener("keyup", e =>{
    console.log("hola")
})


alert("Adjetivos Posesivos, es sensicble a las letras, escribir its no es lo mismo que escribir Its")
