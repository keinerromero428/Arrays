// Enunciado: Leer las distancias en kilómetros de N pedidos del día. El envío es gratis hasta 3 km y la cobertura máxima es de 10 km. Con filter, obtener los pedidos con envío gratis. Con find, el primer pedido fuera de cobertura. Mostrar también cuántos pedidos pagan envío (más de 3 km y hasta 10 km). Si ningún pedido está fuera de cobertura, mostrar "Todos los pedidos están en cobertura".

const obtenerEnvioGratis = (
    distancias
) => {
    return distancias.filter(
        (distancia) =>
            distancia <= 3
    );
};

const contarConEnvio = (
    distancias
) => {
    let pedidos =
        distancias.filter(
            (distancia) =>
                distancia > 3 &&
                distancia <= 10
        );

    return pedidos.length;
};

const buscarPrimeroFuera = (
    distancias
) => {
    return distancias.find(
        (distancia) =>
            distancia > 10
    );
};

let cantidadPedidos = parseInt(
    prompt(
        "¿Cuántos pedidos?"
    )
);

let distancias = [];

for (
    let i = 0;
    i < cantidadPedidos;
    i++
) {
    let distancia = parseFloat(
        prompt(
            "Distancia " +
            (i + 1) +
            ":"
        )
    );

    distancias.push(
        distancia
    );
}

let envioGratis =
    obtenerEnvioGratis(
        distancias
    );

let pedidosConEnvio =
    contarConEnvio(
        distancias
    );

let primerPedidoFuera =
    buscarPrimeroFuera(
        distancias
    );

console.log(
    "Envío gratis (" +
    envioGratis.length +
    "): " +
    unirConComas(
        envioGratis
    )
);

console.log(
    "Pagan envío: " +
    pedidosConEnvio
);

if (
    primerPedidoFuera ===
    undefined
) {
    console.log(
        "Todos los pedidos están en cobertura"
    );
} else {
    console.log(
        "Primer pedido fuera de cobertura: " +
        primerPedidoFuera +
        " km"
    );
}