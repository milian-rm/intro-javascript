
// -----------------------------------------CONDICIONALES--------------------------------------------
//Ejercicio 5
function anioBisiesto(){
    console.log("Bienvenido al Identificador de Años Bisiestos")
    const anioJugador = parseInt(prompt("Ingrese el número del año que desea saber si es o no bisiesto"))
    let presentePasado = " fue "
    if(anioJugador > 2025){
        presentePasado = " será "
    }else if(anioJugador == 2025){
        presentePasado = " es "
    }
    if (anioJugador%4 == 0) {
        if(anioJugador%100 == 0){
            if(anioJugador%400 == 0){
                console.log("Su año "+anioJugador+presentePasado+"año Bisiesto")
            }else{
                console.log("Su año "+anioJugador+" no"+presentePasado+"un año Bisiesto")
            }
        }else{
            console.log("Su año "+anioJugador+presentePasado+"un año Bisiesto")
        }
        
    }else{
        console.log("Su año "+anioJugador+" no"+presentePasado+"un año Bisiesto")
    }
}

// Ejercicio 9
function parImpar(){
    console.log("Bienvenido al Identificador de Número Pares e Impares")
    const numero = parseInt(prompt("Ingrese el número que desea evaluar como Par o Impar"))
    if(numero%2 == 0){
        console.log("Su número "+numero+" es Par")
    }else{
        console.log("Su número "+numero+" es Impar")
    }
}

// -------------------------------------------------BUCLES---------------------------------------------------
//Ejercicio 12
function sumaListaNumeros(){
    console.log("Bienvenido, en este programa se le mostrará la Suma de los Números del 1 al 50")
    let numero = 0
    for (let i = 0; i < 51; i++) {
        let valor = numero+i
        console.log(numero+" + "+i+" = "+valor)
        numero = valor
    }
}
//Ejercicio 15
function tablaMultiplicar(){
    console.log("Bienvenido a Tablas de Multiplicar")
    const numero = parseInt(prompt("Ingrese el número del cuál desea ver la tabla"))
    for (let i = 1; i < 11; i++) {
        let resultado = numero*i;
        console.log(numero+" x "+i+" = "+resultado) 
    }
}
// ---------------------------------------------COMBINADOS Y DESAFÍOS---------------------------------------
//Ejercicio 22
//Ejercicio 28
function mostrar(){
    console.log("Bienvenido al Programa, Elija una Opción")
    console.log("1. Condicionales")
    console.log("2. Bucles")
    console.log("3. Desafíos")
    const opt = parseInt(prompt("Ingrese el número de su Opción\n1. Condicionales\n2. Bucles\n3. Desafíos"))
    switch(opt){
        case 1:
            console.log("Elija entre")
            console.log("1. Verificador de Año Bisiesto")
            console.log("2. Verificador de Número Par e Impar")
            const optCondicional = parseInt(prompt("Ingrese el número de Opción\n1. Verificador de Año Bisiesto\n2. Verificador de Número Par e Impar"))
            switch(optCondicional){
                case 1:
                    anioBisiesto();
                    break;
                case 2:
                    parImpar();
                    break;
                default:
                    console.log("Ingrese una Opción Válida")    
            }
            break;
        case 2:
            console.log("Elija entre")    
            console.log("1. Suma de Todos los Números del 1 al 50")
            console.log("2. Tabla de Multiplicar de un Número")
            const optBucle = parseInt(prompt("Ingrese el número de su Opción\n1. Suma de Todos los Números del 1 al 50\n2. Tabla de Multiplicar de un Número"))
            switch(optBucle){
                case 1:
                    sumaListaNumeros();
                    break;
                case 2:
                    tablaMultiplicar();
                    break;
            }
            break;
        default:
            console.log("Ingrese una Opción Válida")      
    }
}
mostrar()