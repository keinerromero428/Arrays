// Enunciado: Leer las notas de 5 aprendices en escala de 0 a 5. Si una nota está fuera del rango, se vuelve a pedir hasta que sea válida. Mostrar todas las notas separadas por comas, el promedio con un decimal y si el grupo aprobó (promedio mayor o igual a 3.0).

const leerNotaValida = (numero) => {
    let nota = parseFloat(
        prompt("Nota " + numero + ":")
    );
    while (nota < 0 || nota > 5) {
        console.log("Nota inválida, debe estar entre 0 y 5");
        nota = parseFloat(
            prompt("Nota " + numero + ":")
        );
    }
    return nota;
};
const calcularPromedio = (numeros) => {
    let suma = 0;
    for (let i = 0; i < numeros.length; i++) {
        suma = suma + numeros[i];
    }
    return suma / numeros.length;
};
const unirConComas = (lista) => {
    let texto = "";
    for (let i = 0; i < lista.length; i++) {
        texto = texto + lista[i];
        if (i < lista.length - 1) {
            texto = texto + ", ";
        }
    }
    return texto;
};
let notas = [];
for (let i = 0; i < 5; i++) {
    notas.push(
        leerNotaValida(i + 1)
    );
}
let promedio = calcularPromedio(notas);
console.log(
    "Notas: " +
    unirConComas(notas)
);
console.log(
    "Promedio: " +
    promedio.toFixed(1)
);
if (promedio >= 3) {
    console.log("El grupo aprobó");
} else {
    console.log("El grupo no aprobó");
}