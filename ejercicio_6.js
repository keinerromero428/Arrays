// Enunciado: El programa tiene la lista fija de invitados: let invitados = ["ana", "carlos", "luisa", "pedro", "sofía"]; El portero escribe nombres y para cada uno el programa dice si puede entrar. Termina cuando escribe "fin". Al final muestra cuántos entraron y cuántos fueron rechazados. Prohibido includes e indexOf.

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