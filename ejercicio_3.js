// Enunciado: Leer N números (N lo da el usuario y debe ser al menos 1). Mostrar el primero, el último y el del medio. Si N es par hay dos del medio: mostrar ambos.

const leerNumeros = (cantidad) => {
    let numeros = [];
    for (let i = 0; i < cantidad; i++) {
        let numero = parseInt(
            prompt("Número " + (i + 1) + ":")
        );
        numeros.push(numero);
    }
    return numeros;
};
const obtenerUltimo = (numeros) => {
    return numeros[numeros.length - 1];
};
const mostrarMedio = (numeros) => {
    let cantidad = numeros.length;
    if (cantidad % 2 !== 0) {
        let posicion = Math.floor(cantidad / 2);
        console.log(
            "Del medio: " +
            numeros[posicion]
        );
    } else {
        let posicion1 = cantidad / 2 - 1;
        let posicion2 = cantidad / 2;
        console.log(
            "Del medio: " +
            numeros[posicion1] +
            " y " +
            numeros[posicion2]);
    }
};
let cantidadNumeros = parseInt(
    prompt("¿Cuántos números?")
);
while (cantidadNumeros < 1) {
    console.log(
        "La cantidad debe ser al menos 1");
    cantidadNumeros = parseInt(
        prompt("¿Cuántos números?"));
}
let numeros = leerNumeros(cantidadNumeros);
console.log(
    "Primero: " + numeros[0]
);
console.log(
    "Último: " + obtenerUltimo(numeros)
);
mostrarMedio(numeros);