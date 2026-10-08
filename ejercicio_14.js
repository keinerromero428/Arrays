// Enunciado: Leer los precios de N productos sin IVA. Generar con map un array nuevo con el precio más IVA del 19%, redondeado a pesos con Math.round. Mostrar ambos arrays y el total con IVA. Escribe también la versión con for en otra función y comprueba que las dos den el mismo resultado.

const calcularConIva = (
    precio
) => {
    return Math.round(
        precio * 1.19
    );
};

const aplicarIvaConMap = (
    precios
) => {
    return precios.map(
        (precio) =>
            calcularConIva(precio)
    );
};

const aplicarIvaConFor = (
    precios
) => {
    let nuevosPrecios = [];

    for (
        let i = 0;
        i < precios.length;
        i++
    ) {
        nuevosPrecios.push(
            calcularConIva(
                precios[i]
            )
        );
    }

    return nuevosPrecios;
};

let cantidadPrecios = parseInt(
    prompt(
        "¿Cuántos productos?"
    )
);

let precios = [];

for (
    let i = 0;
    i < cantidadPrecios;
    i++
) {
    let precio = parseFloat(
        prompt(
            "Precio " +
            (i + 1) +
            ":"
        )
    );

    precios.push(precio);
}

let preciosConIvaMap =
    aplicarIvaConMap(
        precios
    );

let preciosConIvaFor =
    aplicarIvaConFor(
        precios
    );

console.log(
    "Sin IVA: " +
    unirConComas(precios)
);

console.log(
    "Con IVA: " +
    unirConComas(
        preciosConIvaMap
    )
);

console.log(
    "Total con IVA: $" +
    calcularTotal(
        preciosConIvaMap
    )
);

console.log(
    "Comprobación con for: " +
    unirConComas(
        preciosConIvaFor
    )
);

console.log(
    "El array original no cambió: " +
    unirConComas(precios)
);