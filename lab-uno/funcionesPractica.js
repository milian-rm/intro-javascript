
// -----------------------------------------CONDICIONALES--------------------------------------------
/**
 * EJERCICIO 5. 
 * Programa que determine si un año es Bisiesto
 * Un año es bisiesto si es divisible por cuatro, excepto aquellos divisibles por 100
 * pero no por 400
 */
function anioBisiesto(){
    console.log("----------------------------------------------")
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

/**
 * EJERCICIO 9. 
 * Programa que determine si un número es par o Impar
 * Un número es par cuando es divisible entre 2
 */
function parImpar(){
    console.log("------------------------------------------------------")
    console.log("Bienvenido al Identificador de Número Pares e Impares")
    const numero = parseInt(prompt("Ingrese el número que desea evaluar como Par o Impar"))
    if(numero%2 == 0){
        console.log("Su número "+numero+" es Par")
    }else{
        console.log("Su número "+numero+" es Impar")
    }
}

// -------------------------------------------------BUCLES---------------------------------------------------
/**
 * EJERCICIO 12. 
 * Crea un programa que calcule la suma de todos los números del 1 al 50
 */
function sumaListaNumeros(){
    console.log("------------------------------------------------------")
    console.log("Bienvenido, en este programa se le mostrará la Suma de los Números del 1 al 50")
    let numero = 0
    for (let i = 0; i < 51; i++) {
        let valor = numero+i
        console.log(numero+" + "+i+" = "+valor)
        numero = valor
    }
}
/**
 * EJERCICIO 15. 
 * Programa que imprima la tabla de multiplicar de un número ingresado por el Usuario
 */
function tablaMultiplicar(){
    console.log("------------------------------------------------------")
    console.log("Bienvenido a Tablas de Multiplicar")
    const numero = parseInt(prompt("Ingrese el número del cuál desea ver la tabla"))
    for (let i = 1; i < 11; i++) {
        let resultado = numero*i;
        console.log(numero+" x "+i+" = "+resultado) 
    }
}
// ---------------------------------------------COMBINADOS Y DESAFÍOS---------------------------------------
/**
 * EJERCICIO 22.
 * Crea aun programa que imprima los números del 1 al 100, pero que 
 * imprima "Fizz" para los múltiplos de 3, "Buzz" para los múltiplos de 5,
 * y "FizzBuzz" para los múltiplos de 3 y 5
 */
function fizzBuzz(){
    console.log("------------------------------------------------------")
    console.log("Bienvenido a Fizz Buzz")
    console.log("En este Programa sabrá qué números del 1 al 100 son múltiplos de 3 FIZZ")
    console.log("También los que son divisibles entre 5 BUZZ")
    console.log("Y los que son Divisibles entre Ambos FIZZBUZZ")
    let numero = 1;
    while(numero <= 100){
        if(numero%3==0 && numero%5 ==0){
            console.log(numero+" FizzBuzz")
        }else if(numero%3 == 0){
            console.log(numero+" Fizz")
        }else if(numero%5 == 0){
            console.log(numero+" Buzz")
        }else{
            console.log(numero)
        }

        numero++;
    }
}
/**
 * EJERCICIO 28.
 * Crea una función que reciba un número y determine si es un número primo
 * Los números son primos cuando son solamente divisibles entre 1 y el mismo número
 */
function numeroPrimo(){
    console.log("------------------------------------------------------")
    console.log("Bienvenido al Identificador de Números Primos")
    const primo = parseInt(prompt("Ingrese el número a Evaluar, para saber si es o no Primo"))
    let contador = 0
    if(primo > 1){
        for (let i = 1; i <= primo; i++) {
            if(primo%i == 0){
                console.log("Su número "+primo+" es divisible entre "+i)
                contador++
            }        
        }
        if(contador > 2){
            console.log("Su número "+primo+" no es Primo")
        }else if(contador == 2){
            console.log("Su número "+primo+" es Primo")
        }
    }else{
        console.log("Ingrese un número válido, no pueden evaluarse números menores que 1")
    }
    
}
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
                    break; 
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
                default:
                    console.log("Ingrese una Opción Válida")    
                    break;
            }
            break;
        case 3:
            console.log("Elija entre")    
            console.log("1. FizzBuzz (Números divisibles entre 3 y 5)")
            console.log("2. Identificador de Números Primos")
            const optDesafio = parseInt(prompt("Ingrese el número de su Opción\n1. FizzBuzz (Números divisibles entre 3 y 5)\n2. Identificador de Números Primos"))
            switch(optDesafio){
                case 1:
                    fizzBuzz();
                    break;
                case 2:
                    numeroPrimo();
                    break;    
                default:
                    console.log("Ingrese una Opción Válida")     
                    break;
            }
            break;
        default:
            console.log("Ingrese una Opción Válida")      
    }
}