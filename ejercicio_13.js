// Enunciado: Reescribe mostrarLista del ejercicio 1 usando forEach en lugar de for. La salida debe ser idéntica. Al final del archivo, responde en un comentario: ¿se puede detener un forEach a la mitad, como hiciste en existeEnLista? ¿Qué te dice eso sobre cuándo usarlo y cuándo no?

const mostrarListaForEach = (
    productos
) => {
    console.log(
        "Lista del mercado:"
    );

    productos.forEach(
        (producto, i) => {
            console.log(
                (i + 1) +
                ". " +
                producto
            );
        }
    );

    console.log(
        "Total: " +
        productos.length +
        " productos"
    );
};

let cantidadProductos13 =
    parseInt(
        prompt(
            "¿Cuántos productos?"
        )
    );

let productos13 =
    leerProductos(
        cantidadProductos13
    );

mostrarListaForEach(
    productos13
);