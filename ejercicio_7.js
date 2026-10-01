// Enunciado: Una app de domicilios pide a los clientes calificar de 1 a 5 estrellas. Leer 10 calificaciones validando el rango. Contar cuántas hubo de cada valor usando un array de 5 contadores (no cinco variables) y mostrar un gráfico con asteriscos. Mostrar también la calificación más frecuente.

let invitados = ["ana", "carlos", "luisa", "pedro", "sofía"];
let nombre;
let entraron = 0;
let rechazados = 0;

while (true) {
    nombre = prompt("Ingrese el nombre del invitado (o 'fin' para terminar):").toLowerCase();

    if (nombre === "fin") {
        break;
    }

    let encontrado = false;
    for (let i = 0; i < invitados.length; i++) {
        if (invitados[i] === nombre) {
            encontrado = true;
            break;
        }
    }

    if (encontrado) {
        console.log(`${nombre} puede entrar.`);
        entraron++;
    } else {
        console.log(`${nombre} no está en la lista de invitados.`);
        rechazados++;
    }

}

console.log(`Total de invitados que entraron: ${entraron}`);
console.log(`Total de invitados rechazados: ${rechazados}`);