let botonNext = document.getElementById("btnNext");/* crear variable*/

    /* esto es el array para crear las preguntas*/
let pronouns = ["Could","Beautiful","Poor","Clean","Interesting","Neat","Big","Good"]//7
let possesive = ["Hot","Ugly","Rich","Dirty","Boring","Messy","Small","Bad"]//7

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


        //con esto doy nfasis en la palabra de negro para el boton confirm
        $('#question').css({
            'color': 'black'
        });

        document.getElementById("respuestaUsuario").value=""

    }else{
            //con esto doy nfasis en la palabra de rojo para el boton confirm
            $('#question').css({
                'color': 'red'
            });

            // para dejar limpio el input 
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
//esto es para cuando teclee con la tecla enter
let keyBoard = document.querySelector('.keyboard')
keyBoard.addEventListener('keyup', e =>{
    if(e.keyCode === 13 ){
        let respuestaUser= document.getElementById("respuestaUsuario").value
    
        if(respuestaUser== possesive[num]){
            test()   
            //con esto doy nfasis en la palabra de negro para el evento de la letra enter
            $('#question').css({
                'color': 'black'
            });
                document.getElementById("respuestaUsuario").value=""
    
        }else{
            //con esto doy nfasis en la palabra de rojo para el evento de la letra enter
            $('#question').css({
                'color': 'red'
            });
            document.getElementById("respuestaUsuario").value=""
            alert("Incorrect!")
            
        }
    }
})