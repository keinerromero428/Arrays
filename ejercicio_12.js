//Enunciado: En una fila de turnos, rotar k posiciones a la derecha significa que los últimos k pasan al inicio. Leer N nombres y el valor de k, y retornar un array nuevo rotado. k puede ser mayor que N: rotar 7 en una fila de 5 es lo mismo que rotar 2.

const rotarDerecha = (
    lista,
    k
) => {
    let nuevaLista = [];

    k = k % lista.length;

    for (
        let i = 0;
        i < lista.length;
        i++
    ) {
        let nuevaPosicion =
            (i + k) %
            lista.length;

        nuevaLista[nuevaPosicion] =
            lista[i];
    }

    return nuevaLista;
};

let cantidadPersonas = parseInt(
    prompt("¿Cuántas personas?")
);

let personas = [];

for (
    let i = 0;
    i < cantidadPersonas;
    i++
) {
    let persona = prompt(
        "Persona " +
        (i + 1) +
        ":"
    );

    personas.push(persona);
}

let posicionesRotar = parseInt(
    prompt(
        "¿Cuántas posiciones rotar?"
    )
);

let filaRotada =
    rotarDerecha(
        personas,
        posicionesRotar
    );

console.log(
    "Fila original: " +
    unirConComas(personas)
);

console.log(
    "Fila rotada: " +
    unirConComas(filaRotada)
);