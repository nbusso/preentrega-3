import { productos } from './db_productos.js';


export let carrito = JSON.parse(localStorage.getItem('carrito')) || [];


export const mostrarCarrito = carrito => {
    contenedorCarrito.innerHTML = '';
    carrito.forEach(producto => {
        let div = document.createElement('div');
        div.className = 'tarjeta flex bg-gray-700 rounded-r-md mt-4 relative';
        div.innerHTML = `       
                            <img src="${producto.imagen}" class="w-20 rounded-l-md" alt="">
                            
                            <div class="relative w-full p-2 flex flex-col justify-between">
                                <h2 class="font-semibold text-l pb-2 border-b">${producto.articulo} | ${producto.modelo}</h2>
                                <p>Cantidad: ${producto.cantidad}</p>
                                <p class="absolute top-[54px] font-bold right-2">$ ${producto.precio * producto.cantidad}</p>
                            </div>
                            <button id="eliminar_${producto.id}" class="eliminar block w-6 h-6 rounded-md pl-1 bg-red-600 absolute top-[-7px] right-[-7px] cursor-pointer">
                                <svg class="pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
                                    <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5"/>
                                </svg>
                            </button>
        `
        contenedorCarrito.append(div);    
    })

    suma.innerText = "$ "+ carrito.reduce(
        (accumulator, item) => accumulator + (item.cantidad * item.precio),
        0,
    );

    localStorage.setItem("carrito", JSON.stringify(carrito));
    console.log(localStorage.getItem('carrito'));
    document.getElementById('contadorCarrito').innerText = carrito.reduce(
        (accumulator, item) => accumulator + item.cantidad, 
        0,
    );
}


export const agregarAlCarrito = e => {
    if (e.target.classList.contains('agregar')) {
            const id = e.target.id;
            const producto = productos.find(producto => "agregar_" + producto.id == id);

            const productoExistente = carrito.find(item => item.id === producto.id);

            if (productoExistente) {
                productoExistente.cantidad += 1;
            } else {
                producto.cantidad = 1;
                carrito.push(producto);
            }

            mostrarCarrito(carrito);
    }
}

export const borrarDeCarrito = e => {
    if (e.target.classList.contains('eliminar')) {
        const id = e.target.id;
        const producto = carrito.find(producto => "eliminar_" + producto.id == id);
        carrito.splice(carrito.indexOf(producto), 1);
        mostrarCarrito(carrito);
    }
}

export const vaciarCarrito = () => {
    carrito = [];
    mostrarCarrito(carrito);
}



