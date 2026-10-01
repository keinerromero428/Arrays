// Enunciado: Copia la lectura del ejercicio 4. Mostrar el día con mayor venta, el día con menor venta y la diferencia entre ambos.

let dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
let ventas = [];

for (let i = 0; i < dias.length; i++) {
    let venta = parseFloat(prompt(`Ingrese la venta del día ${dias[i]}:`));
    ventas.push(venta);
}

function buscarPosicionMayor(numeros) {
    let posicionMayor = 0;
    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] > numeros[posicionMayor]) {
            posicionMayor = i;
        }
    }
    return posicionMayor;
}

function buscarPosicionMenor(numeros) {
    let posicionMenor = 0;
    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] < numeros[posicionMenor]) {
            posicionMenor = i;
        }
    }
    return posicionMenor;
}

let posicionMayor = buscarPosicionMayor(ventas);
let posicionMenor = buscarPosicionMenor(ventas);

let diferencia = ventas[posicionMayor] - ventas[posicionMenor];

console.log(`Mejor día: ${dias[posicionMayor]} ($${ventas[posicionMayor].toFixed(2)})`);
console.log(`Peor día: ${dias[posicionMenor]} ($${ventas[posicionMenor].toFixed(2)})`);
console.log(`Diferencia: $${diferencia.toFixed(2)}`);