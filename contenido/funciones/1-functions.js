/**
 * FUNCIONES
 */

//Somos dueños de una empresa y necesitamos
// aplicar descuentos a nuestros productos

function calcularPrecioDeDescuento(precio, descuentoEnPorcentaje) {
    const descuento = (precio*descuentoEnPorcentaje)/100;
    const nuevoPrecio = precio-descuento;

    return nuevoPrecio;
}

const precioOriginal = 1000;
const descuento = 18;
const precioFinal = calcularPrecioDeDescuento(precioOriginal, descuento);

console.log("Precio original: Q"+precioOriginal)
console.log("Descuento: "+ descuento + "%")
console.log("Precio con descuento: Q"+precioFinal)
