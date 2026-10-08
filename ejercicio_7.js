// Enunciado: Una app de domicilios pide a los clientes calificar de 1 a 5 estrellas. Leer 10 calificaciones validando el rango. Contar cuántas hubo de cada valor usando un array de 5 contadores (no cinco variables) y mostrar un gráfico con asteriscos. Mostrar también la calificación más frecuente.

const contarPorEstrellas = (calificaciones) => {
    let contadores = [ 0,0,0,0,0];
    for (let i = 0; i < calificaciones.length; i++) {
        let estrella = calificaciones[i];

        contadores[estrella - 1] =
            contadores[estrella - 1] + 1;
    }
    return contadores;
};
const repetirCaracter = (caracter, veces) => {
    let texto = "";
    for (let i = 0; i < veces; i++) {
        texto = texto + caracter;
    }
    return texto;
};
let calificaciones = [];
for (let i = 0; i < 10; i++) {
    let calificacion = parseInt(prompt( "Calificación " + (i + 1) + ":"));
    while (calificacion < 1 || calificacion > 5) {
        console.log("Calificación inválida, debe estar entre 1 y 5");
        calificacion = parseInt(prompt( "Calificación " + (i + 1) + ":" ));}
    calificaciones.push(calificacion);
}
let contadores = contarPorEstrellas(calificaciones);
for (let i = 0; i < contadores.length; i++) {
    console.log("Estrellas " + (i + 1) + ": " + repetirCaracter("*", contadores[i]) +" (" + contadores[i] + ")");
}

let posicionFrecuente = buscarPosicionMayor(contadores);

console.log("Más frecuente: " + (posicionFrecuente + 1) +" estrellas");
