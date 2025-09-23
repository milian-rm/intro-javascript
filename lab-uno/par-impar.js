function parImpar(){
    console.log("Bienvenido al Identificador de Número Pares e Impares")
    const numero = parseInt(prompt("Ingrese el número que desea evaluar como Par o Impar"))
    if(numero%2 == 0){
        console.log("Su número "+numero+" es Par")
    }else{
        console.log("Su número "+numero+" es Impar")
    }
}

parImpar();