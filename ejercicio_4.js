// Un local de empanadas registra sus ventas diarias. El programa arranca con este array fijo: let dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"]; Pedir la venta de cada día usando el nombre del día en el mensaje, guardarlas en otro array y mostrar un reporte día por día con el total de la semana.

let dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
let ventas = [];

for (let i = 0; i < dias.length; i++) {
    let venta = parseFloat(prompt(`Ingrese la venta del día ${dias[i]}:`));
    ventas.push(venta);
}

let totalSemana = 0;
console.log("Reporte de ventas:");
for (let i = 0; i < dias.length; i++) {
    console.log(`${dias[i]}: $${ventas[i].toFixed(2)}`);
    totalSemana += ventas[i];
}
console.log(`Total de la semana: $${totalSemana.toFixed(2)}`);