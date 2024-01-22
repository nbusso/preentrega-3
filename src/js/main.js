// imports
import { productos } from './db_productos.js'
import { mostrarProductos, filtroCategoria, ordenarNombreAsc, ordenarNombreDesc, ordenarPrecioAsc, ordenarPrecioDesc, filtroPrecio } from './productos.js'
import { agregarAlCarrito, borrarDeCarrito, mostrarCarrito } from './carrito.js'
import { carrito, vaciarCarrito } from './carrito.js'



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


// variables
let filtro = '';



// eventos de inicio
document.addEventListener('DOMContentLoaded', mostrarProductos(productos));
document.addEventListener('DOMContentLoaded', () => {
    mostrarCarrito(carrito)
});

inicio.addEventListener('click', () => {
    mostrarProductos(productos);
})

// eventos > filtros
catArmasDeFuego.addEventListener('click', () => {
    filtro = 'armas de fuego';
    mostrarProductos(filtroCategoria(productos, filtro));
});

catVestimenta.addEventListener('click', () => {
    filtro = 'vestimenta';
    mostrarProductos(filtroCategoria(productos, filtro));
});

catExplosivos.addEventListener('click', () => {
    filtro = 'explosivos';
    mostrarProductos(filtroCategoria(productos, filtro));
});

formPrecioMayorA.children[1].addEventListener('click', e => {
    e.preventDefault();
    mostrarProductos(filtroPrecio(productos, formPrecioMayorA.children[0].value, 'mayor'));
})

formPrecioMenorA.children[1].addEventListener('click', e => {
    e.preventDefault();
    mostrarProductos(filtroPrecio(productos, formPrecioMenorA.children[0].value, 'menor'));
})

// eventos > orden
ordNombreAsc.addEventListener('click', () => {
    mostrarProductos(ordenarNombreAsc(productos));
})

ordNombreDesc.addEventListener('click', () => {
    mostrarProductos(ordenarNombreDesc(productos));
})

ordPrecioAsc.addEventListener('click', () => {
    mostrarProductos(ordenarPrecioAsc(productos));
})

ordPrecioDesc.addEventListener('click', () => {
    mostrarProductos(ordenarPrecioDesc(productos));
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
