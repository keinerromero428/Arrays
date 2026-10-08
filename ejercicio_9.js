// Enunciado: Leer N palabras. Crear una función que retorne un array nuevo con las palabras en orden inverso, sin modificar el original y sin usar reverse. Mostrar ambos arrays para demostrar que el original quedó igual.

const invertir = (lista) => {
    let invertido = [];

    for (
        let i = lista.length - 1;
        i >= 0;
        i--
    ) {
        invertido.push(lista[i]);
    }

    return invertido;
};

let cantidadPalabras = parseInt(
    prompt("¿Cuántas palabras?")
);

let palabras = [];

for (
    let i = 0;
    i < cantidadPalabras;
    i++
) {
    let palabra = prompt(
        "Palabra " +
        (i + 1) +
        ":"
    );

    palabras.push(palabra);
}

let palabrasInvertidas =
    invertir(palabras);

console.log(
    "Original: " +
    unirConComas(palabras)
);

console.log(
    "Invertido: " +
    unirConComas(
        palabrasInvertidas
    )
);