//ArrayList con las 20 palabras
let palabras = ["teclado", "monitor", "programacion", "estudio",
                "correo", "telefono", "mariposa", "dinosaurio",
                "telescopio", "montaña", "chocolate", "lampara",
                "bicicleta", "nube", "castillo", "espejo",
                "tornado", "globo", "guitarra", "reloj"
]
//Se le da un valor a la variable palabra, seleccionando un índice aleatorio del arraylist
let palabra = palabras[Math.floor(Math.random() * palabras.length)]
console.log(palabra)

let intento = 0;
let letrasIngresadas = []
let letrasPalabra = []
let letrasAdivinadas = Array(palabra.length)
//Pongo _ en las letras de la palabra que van a adivinar
for (let i = 0; i < palabra.length; i++) {
    letrasAdivinadas[i] = i
    letrasAdivinadas[i] = "_"
}

//Asigno las letras de la palabra al arraylist
for (let i = 0; i < palabra.length; i++) {
        letrasPalabra.push(palabra[i])
    }

//Dibujo del ahorcado, con codigo ASCII se irá dibujando la personita colgada
function dibujarAhorcado() {
    let dibujo = "";
    if (intento == 1) {
        dibujo = "  +---+\n  |   |\n  |   O\n  |\n  |\n  |\n=========";
    } else if (intento == 2) {
        dibujo = "  +---+\n  |   |\n  |   O\n  |   |\n  |   |\n  |\n=========";
    } else if (intento == 3) {
        dibujo = "  +---+\n  |   |\n  |   O\n  |   |\n  |   |\n  |  /\n=========";
    } else if (intento == 4) {
        dibujo = "  +---+\n  |   |\n  |   O\n  |   |\n  |   |\n  |  / \\\n=========";
    } else if (intento == 5) {
        dibujo = "  +---+\n  |   |\n  |   O\n  |  \\|\n  |   |\n  |  / \\\n=========";
    } else if (intento == 6) {
        dibujo = "  +---+\n  |   |\n  |   O\n  |  \\|/\n  |   |\n  |  / \\\n=========";
    } else if (intento >= 7) {
        dibujo = "  +---+\n  |   |\n  |   X\n  |  \\|/\n  |   |\n  |  / \\\n=========";
    }
    
    //Con esto ponemos el dibujo dentro del div que hicimos en el html, para poder mostrarlo
    document.getElementById("dibujo").textContent = dibujo;
}
   

//Aquí vamos a verificar las letras que ingresan
function leerPalabra(letra){
    //Si no han ingresado la letra, pasan del if
    if(!letrasIngresadas.includes(letra)){
        //agregamos la letra al ArrayList de LetrasIngresadas, para después verificar que no puedan volver a ingresarla
        letrasIngresadas.push(letra)
        //Si el arraylist al que subimos las letras de la palabra, contienen la letra que el usuario ingresa, pasan el if
        if(letrasPalabra.includes(letra)){
            //Recorremos el arraylist de las letras de la palabra, y si hay alguna coincidencia con la letra, la agregamos
            //a letras adivinadas
            for(let i = 0; i < letrasPalabra.length; i++){
                if(letrasPalabra[i] === letra){
                    letrasAdivinadas[i] = letra;
                }
            }
        
        }else{
            //Si el arraylist no contiene la letra, contamos un intento y llamamos a dibujarAhorcado()
            intento++;
            dibujarAhorcado()
        }   
    }else{
        alert("Ya habías ingresado esa letra")
    }

        
    
}

//Con este método vamos a mostrar los intentos y las letras adivinadas de la palabra
function mostrarInfo() {
    let palabraMostrar = "";
    for (let i = 0; i < letrasAdivinadas.length; i++) {
        palabraMostrar = palabraMostrar + letrasAdivinadas[i] + " ";
    }
    
    document.getElementById("palabra").textContent = palabraMostrar;
    document.getElementById("info").textContent = "Intentos fallidos: " + intento + " de 7";
}

//Aquí es donde mandamos el prompt para que el usuario pueda ingresar su letra
function escribirLetra(){
    //Verificamos que no se haya pasado de los intentos
    if(intento >= 7) {
        alert("El juego ya terminó. La palabra era: " + palabra);
        return;
    }else{
        let gano = true;
        mostrarInfo();
            
        let letra = prompt("Ingresa una Letra");
        //Vamos a añadir un if que verifique el ingreso no sea "" y que sea solamente una letra
        if(!letra == "" && letra.length == 1){
            leerPalabra(letra);
            mostrarInfo();
        }else{
            alert("Dejaste el espacio en blanco o pusiste más de una letra")
        }
            
        
        
        //Si el arraylist de letras adivinadas que inicializamos al inicio con _ aún tiene alguno, entonces
        //el usuario aún no ha ganado
        for (let i = 0; i < letrasAdivinadas.length; i++) {
            if (letrasAdivinadas[i] === "_") {
                gano = false;
                break;
            }
        }
        
        //Si gano no se convirtió en falso
        if (gano == true) {
            alert("¡Felicidades! Adivinaste la palabra: " + palabra+ "\nY tuviste "+intento+" intentos fallidos");
            return;
        }
        //Si el intento    
        if (intento >= 7) {
            alert("Perdiste. La palabra era: " + palabra);
            return;
        }
    }
}
//Para que aparezcan los _ al inicio
mostrarInfo()

