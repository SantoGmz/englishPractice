let botonNext = document.getElementById("btnNext");/* crear variable*/

    /* esto es el array para crear las preguntas*/
let pronouns = [
                "tall",//1
                "big",//2
                "happy",//3
                "Safe",//4
                "Confortable",//5
                "Huge",//6
                "Near",//7
                "Funny",//8
                "Beautiful",//9
                "Attractive",//10
                "Good",//11
                "Cold",//12
                "Rich",//13
                "Expensive",//14
                "Neat",//15
                "Polite"//16
            ]//7

                let possesive = [
                "short",
                "small",
                "sad",
                "Dangerous",
                "Unconfortable",//5
                "Tiny",
                "Far",
                "Serious",
                "Ugly",
                "Unattractive",//10
                "Bad",
                "Hot",
                "Poor",
                "Cheap",
                "Messy",//15
                "Impolite" 
            ]//7

    let test3 = pronouns
    pronouns = possesive
    possesive = test3
test()

function test(){
    /*creo un numero aleatorio */
    num = generate(0,15);


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
        document.getElementById("respuestaUsuario").value=""
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


//alert("Adjetivos Posesivos, es sensicble a las letras, escribir its no es lo mismo que escribir Its")
 

//valor decimal de enter es 13
let keyBoard = document.querySelector('.keyboard')
keyBoard.addEventListener('keyup', e =>{
    if(e.keyCode === 13 ){
        let respuestaUser= document.getElementById("respuestaUsuario").value
    
        if(respuestaUser== possesive[num]){
                test()   
                document.getElementById("respuestaUsuario").value=""
    
        }else{
            alert("Incorrect!")
            
        }
    }
})