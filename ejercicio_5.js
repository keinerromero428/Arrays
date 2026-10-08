// Enunciado: Copia la lectura del ejercicio 4. Mostrar el día con mayor venta, el día con menor venta y la diferencia entre ambos.

const buscarPosicionMayor = (numeros) => {
    let posicionMayor = 0;
    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] > numeros[posicionMayor]) {
            posicionMayor = i;
        }
    }
    return posicionMayor;
};
const buscarPosicionMenor = (numeros) => {
    let posicionMenor = 0;
    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] < numeros[posicionMenor]) {
            posicionMenor = i;
        }
    }
    return posicionMenor;
};
let ventasEjercicio5 = leerVentas(dias);
let posicionMayor = buscarPosicionMayor(ventasEjercicio5);
let posicionMenor = buscarPosicionMenor(ventasEjercicio5);
let diferencia =ventasEjercicio5[posicionMayor] - ventasEjercicio5[posicionMenor];
console.log(
    "Mejor día: " +
    dias[posicionMayor] +
    " ($" +
    ventasEjercicio5[posicionMayor] +
    ")"
);
console.log("Peor día: " +dias[posicionMenor] +" ($" +ventasEjercicio5[posicionMenor] +")");
console.log( "Diferencia: $" + diferencia);