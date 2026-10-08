// Enunciado: Leer 8 números enteros. Construir dos arrays nuevos, uno con los pares y otro con los impares, en el orden en que llegaron. Mostrar ambos con su cantidad. Si alguno queda vacío, mostrar "(ninguno)".

const esPar = (numero) => {
    return numero % 2 === 0;
};

const filtrarPares = (numeros) => {
    let pares = [];

    for (let i = 0; i < numeros.length; i++) {
        if (esPar(numeros[i])) {
            pares.push(numeros[i]);
        }
    }

    return pares;
};

const filtrarImpares = (numeros) => {
    let impares = [];

    for (let i = 0; i < numeros.length; i++) {
        if (!esPar(numeros[i])) {
            impares.push(numeros[i]);
        }
    }

    return impares;
};

let numerosParesImpares =
    leerNumeros(8);

let pares =
    filtrarPares(
        numerosParesImpares
    );

let impares =
    filtrarImpares(
        numerosParesImpares
    );

let textoPares = "(ninguno)";
let textoImpares = "(ninguno)";

if (pares.length > 0) {
    textoPares =
        unirConComas(pares);
}

if (impares.length > 0) {
    textoImpares =
        unirConComas(impares);
}

console.log(
    "Pares (" +
    pares.length +
    "): " +
    textoPares
);

console.log(
    "Impares (" +
    impares.length +
    "): " +
    textoImpares
);