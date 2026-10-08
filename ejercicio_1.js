//Enunciado: Pedir cuántos productos se van a comprar, leer el nombre de cada uno y guardarlos en un array. Al final mostrar la lista numerada desde 1 y el total de productos.

const leerProductos = (cantidad) => {
    let productos = [];
    for (let i = 0; i < cantidad; i++) {
        let producto = prompt("Producto " + (i + 1) + ":");
        productos.push(producto);
    }
    return productos;
};
const mostrarLista = (productos) => {
    console.log("Lista del mercado:");
    for (let i = 0; i < productos.length; i++) {
        console.log((i + 1) + ". " + productos[i]);
    }
    console.log("Total: " + productos.length + " productos");
};
let cantidadProductos = parseInt(
    prompt("¿Cuántos productos?")
);
let productos = leerProductos(cantidadProductos);
mostrarLista(productos);