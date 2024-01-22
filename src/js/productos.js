export const contenedorProductos = document.getElementById('contenedorProductos');

export const mostrarProductos = productos => {
    contenedorProductos.innerHTML = ``;
    productos.forEach(producto => {
        let div = document.createElement('div');
        div.className = 'rounded overflow-hidden shadow-lg flex flex-col max-w-[300px] border border-cyberpunk-fucsia hover:border-cyberpunk-amarillo-1 duration-300';
        div.innerHTML = `
                        <a href="#"></a>
                        <div class="relative"><a href="#">
                                <img class="w-full"
                                    src="${producto.imagen}"
                                    alt="${producto.articulo} | ${producto.marca}">
                                <div
                                    class="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25">
                                </div>
                            </a>
                            <a href="#!">
                                <div
                                    class="text-xs absolute top-0 right-0 bg-cyberpunk-amarillo-1 px-4 py-2 text-cyberpunk-fucsia font-mono font-extrabold text-[15px] mt-3 mr-3 hover:bg-cyberpunk-fucsia hover:text-cyberpunk-amarillo-1 transition duration-300 ease-in-out">
                                    ${producto.marca}
                                </div>
                            </a>
                        </div>
                        <div class="px-6 py-4 mb-auto">
                            <a href="#"
                                class="font-medium text-lg inline-block hover:text-cyberpunk-fucsia transition duration-500 ease-in-out mb-2">${producto.articulo} | ${producto.modelo} </a>
                            <p class="text-gray-500 text-sm">
                                ${producto.descripcion}
                            </p>
                            <p class="pt-2">
                            ${producto.categoria}</p>
                        </div>
                        <div class="px-3 py-3 flex flex-row items-center justify-between bg-cyberpunk-fucsia">
                            <span href="#" class="py-1 text-xs font-regular text-gray-50 mr-1 flex flex-row items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-currency-exchange" viewBox="0 0 16 16">
                            <path d="M0 5a5 5 0 0 0 4.027 4.905 6.5 6.5 0 0 1 .544-2.073C3.695 7.536 3.132 6.864 3 5.91h-.5v-.426h.466V5.05q-.001-.07.004-.135H2.5v-.427h.511C3.236 3.24 4.213 2.5 5.681 2.5c.316 0 .59.031.819.085v.733a3.5 3.5 0 0 0-.815-.082c-.919 0-1.538.466-1.734 1.252h1.917v.427h-1.98q-.004.07-.003.147v.422h1.983v.427H3.93c.118.602.468 1.03 1.005 1.229a6.5 6.5 0 0 1 4.97-3.113A5.002 5.002 0 0 0 0 5m16 5.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0m-7.75 1.322c.069.835.746 1.485 1.964 1.562V14h.54v-.62c1.259-.086 1.996-.74 1.996-1.69 0-.865-.563-1.31-1.57-1.54l-.426-.1V8.374c.54.06.884.347.966.745h.948c-.07-.804-.779-1.433-1.914-1.502V7h-.54v.629c-1.076.103-1.808.732-1.808 1.622 0 .787.544 1.288 1.45 1.493l.358.085v1.78c-.554-.08-.92-.376-1.003-.787zm1.96-1.895c-.532-.12-.82-.364-.82-.732 0-.41.311-.719.824-.809v1.54h-.005zm.622 1.044c.645.145.943.38.943.796 0 .474-.37.8-1.02.86v-1.674z"/>
                            </svg>
                            <span class="ml-2 text-[18px] font-mono font-bold">${producto.precio}</span>
                            </span>
                            <button id="agregar_${producto.id}" class="agregar bg-cyberpunk-turquesa hover:bg-cyberpunk-amarillo-2 p-2 rounded-sm">
                                <svg class="pointer-events-none"xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="black" class="bi bi-cart" viewBox="0 0 16 16">
                                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
                                </svg> 
                            </button>
                        </div>
        `;

    contenedorProductos.append(div);
    });
};

export const filtroCategoria = (productos, categoria) => {
    return productos.filter(producto => producto.categoria.toLowerCase() === categoria);
}

export const filtroPrecio = (productos, precio, operacion) => {
    if (operacion === 'mayor') {
        let nuevoArray = productos.filter(producto => producto.precio > precio);
        return nuevoArray;
    } else if (operacion === 'menor') {
        let nuevoArray = productos.filter(producto => producto.precio < precio);
        return nuevoArray;
    }
}

export const ordenarNombreAsc = productos => {
    productos.sort((a, b) => {
        const articuloA = a.articulo.toUpperCase();
        const articuloB = b.articulo.toUpperCase();

        if (articuloA < articuloB) {
            return -1;
        }
        if (articuloA > articuloB) {
            return 1;
        }

        return 0;
    })
    return productos;
}

export const ordenarNombreDesc = productos => {
    productos.sort((a, b) => {
        const articuloA = a.articulo.toUpperCase();
        const articuloB = b.articulo.toUpperCase();

        if (articuloA < articuloB) {
            return 1;
        }
        if (articuloA > articuloB) {
            return -1;
        }

        return 0;
    })
    return productos;
}

export const ordenarPrecioAsc = productos => {
    productos.sort((a, b) => a.precio - b.precio);
    return productos;
};

export const ordenarPrecioDesc = productos => {
    productos.sort((a, b) => b.precio - a.precio)
    return productos;    
}

