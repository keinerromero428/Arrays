//Enunciado: Con la lectura del ejercicio 4, calcular el promedio diario redondeado a pesos, mostrar qué días estuvieron por encima del promedio y cuántos fueron.

const contarMayoresQue = (numeros, limite) => {
    let cantidad = 0;

    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] > limite) {
            cantidad++;
        }
    }

    return cantidad;
};

const mostrarDiasSobre = (
    dias,
    ventas,
    limite
) => {
    for (let i = 0; i < ventas.length; i++) {
        if (ventas[i] > limite) {
            console.log(
                dias[i] +
                ": $" +
                ventas[i]
            );
        }
    }
};

let ventasEjercicio8 =
    leerVentas(dias);

let promedioVentas =
    calcularPromedio(
        ventasEjercicio8
    );

let promedioRedondeado =
    Math.round(promedioVentas);

console.log(
    "Promedio diario: $" +
    promedioRedondeado
);

console.log(
    "Días por encima del promedio:"
);

mostrarDiasSobre(
    dias,
    ventasEjercicio8,
    promedioVentas
);

console.log(
    "Total: " +
    contarMayoresQue(
        ventasEjercicio8,
        promedioVentas
    ) +
    " días"
);