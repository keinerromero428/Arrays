// Enunciado: Leer 10 números. Construir un array nuevo sin repetidos que conserve el orden en que apareció cada número por primera vez. Mostrar cuántos repetidos se eliminaron. Prohibido includes, indexOf y Set.

const eliminarRepetidos = (numeros) => {
    let nuevos = [];

    for (
        let i = 0;
        i < numeros.length;
        i++
    ) {
        if (
            !existeEnLista(
                nuevos,
                numeros[i]
            )
        ) {
            nuevos.push(
                numeros[i]
            );
        }
    }

    return nuevos;
};

let numerosRepetidos = [];

for (let i = 0; i < 10; i++) {
    let numero = parseInt(
        prompt(
            "Número " +
            (i + 1) +
            ":"
        )
    );

    numerosRepetidos.push(
        numero
    );
}

let numerosSinRepetir =
    eliminarRepetidos(
        numerosRepetidos
    );

let repetidosEliminados =
    numerosRepetidos.length -
    numerosSinRepetir.length;

console.log(
    "Sin repetidos: " +
    unirConComas(
        numerosSinRepetir
    )
);

console.log(
    "Se eliminaron " +
    repetidosEliminados +
    " repetidos"
);