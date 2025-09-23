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


function parImpar(){
    console.log("Bienvenido al Identificador de Número Pares e Impares")
    const numero = parseInt(prompt("Ingrese el número que desea evaluar como Par o Impar"))
    if(numero%2 == 0){
        console.log("Su número "+numero+" es Par")
    }else{
        console.log("Su número "+numero+" es Impar")
    }
}


function mostrar(){
    console.log("Bienvenido al Programa, Elija una Opción")
    console.log("1. Condicionales")
    console.log("2. Bucles")
    console.log("3. Desafíos")
    const opt = parseInt(prompt("Ingrese el número de su Opción"))
    switch(opt){
        case 1:
            console.log("Elija entre")
            console.log("1. Verificador de Año Bisiesto")
            console.log("2. Verificado de Número Par e Impar")
            const optCondicional = parseInt(prompt("Ingrese el número de Opción"))
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
        default:
            console.log("Ingrese una Opción Válida")      
    }
}
mostrar()