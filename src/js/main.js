// imports
import { productos } from './db_productos.js'
import { mostrarProductos, filtroCategoria, ordenarNombreAsc, ordenarNombreDesc, ordenarPrecioAsc, ordenarPrecioDesc, filtroPrecio } from './productos.js'
import { agregarAlCarrito, borrarDeCarrito, mostrarCarrito, carrito, vaciarCarrito, comprarCarrito } from './carrito.js'




// elementos DOM
// varios
const inicio = document.getElementById('inicio');
const contenedorProductos = document.getElementById('contenedorProductos');
const floaty = document.getElementById('floaty');
const contenedorCarrito = document.getElementById('contenedorCarrito');

// filtro categorias
const catArmasDeFuego = document.getElementById('catArmasDeFuego');
const catVestimenta = document.getElementById('catVestimenta');
const catExplosivos = document.getElementById('catExplosivos');
const formPrecioMayorA = document.getElementById('formPrecioMayorA');
const formPrecioMenorA = document.getElementById('formPrecioMenorA');

// ordenamiento
const ordNombreAsc = document.getElementById('ordNombreAsc');
const ordNombreDesc = document.getElementById('ordNombreDesc');
const ordPrecioAsc = document.getElementById('ordPrecioAsc');
const ordPrecioDesc = document.getElementById('ordPrecioDesc');

//carrito
const btnCarrito = document.getElementById('btnCarrito');
const btnVaciarCarrito = document.getElementById('vaciarCarrito');
const btnComprarCarrito = document.getElementById('comprarCarrito');


// variables
let productoFiltrado = productos;


// eventos de inicio
document.addEventListener('DOMContentLoaded', mostrarProductos(productos));
mostrarCarrito(carrito)

inicio.addEventListener('click', () => {
    mostrarProductos(productos);
})

// eventos > filtros
catArmasDeFuego.addEventListener('click', () => {
    productoFiltrado = filtroCategoria(productos, 'armas de fuego');
    mostrarProductos(productoFiltrado);
});

catVestimenta.addEventListener('click', () => {
    productoFiltrado = filtroCategoria(productos, 'vestimenta');
    mostrarProductos(productoFiltrado);
});

catExplosivos.addEventListener('click', () => {
    productoFiltrado = filtroCategoria(productos, 'explosivos');
    mostrarProductos(productoFiltrado);
});

formPrecioMayorA.children[1].addEventListener('click', e => {
    e.preventDefault();
    productoFiltrado = filtroPrecio(productos, formPrecioMayorA.children[0].value, 'mayor');
    mostrarProductos(productoFiltrado);
})

formPrecioMenorA.children[1].addEventListener('click', e => {
    e.preventDefault();
    productoFiltrado = filtroPrecio(productos, formPrecioMenorA.children[0].value, 'menor');
    mostrarProductos(productoFiltrado);
})

// eventos > orden
ordNombreAsc.addEventListener('click', () => {
    mostrarProductos(ordenarNombreAsc(productoFiltrado));
})

ordNombreDesc.addEventListener('click', () => {
    mostrarProductos(ordenarNombreDesc(productoFiltrado));
})

ordPrecioAsc.addEventListener('click', () => {
    mostrarProductos(ordenarPrecioAsc(productoFiltrado));
})

ordPrecioDesc.addEventListener('click', () => {
    mostrarProductos(ordenarPrecioDesc(productoFiltrado));
})

//eventos >  carrito
contenedorProductos.addEventListener('click', agregarAlCarrito);
contenedorCarrito.addEventListener('click', borrarDeCarrito);

btnCarrito.addEventListener('click', () => {
    document.getElementById('floaty').classList.contains('hidden') ?
    document.getElementById('floaty').classList.remove('hidden') :
    document.getElementById('floaty').classList.add('hidden')  
})

btnVaciarCarrito.addEventListener('click', vaciarCarrito);

btnComprarCarrito.addEventListener('click', comprarCarrito);
