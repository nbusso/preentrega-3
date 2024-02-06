// export const productosBase = [
//     {
//         id: 1,
//         articulo: 'Rifle Francotirador',
//         marca: 'Karmac',
//         modelo: 'XT-2000',
//         categoria: 'Armas de fuego',
//         imagen: './src/img/rifle-sniper-karmac.jpg',
//         descripcion: 'Lorem ipsum',
//         precio: 5000
//     },
//     {
//         id: 2,
//         articulo: 'Casco',
//         marca: 'Elventine',
//         modelo: 'EL-300',
//         categoria: 'Vestimenta',
//         imagen: './src/img/casco-elventine.jpg',
//         descripcion: 'Lorem ipsum',
//         precio: 950
//     },
//     {
//         id: 3,
//         articulo: 'Granada Frag',
//         marca: 'Boomcha',
//         modelo: 'K-BOOM-35',
//         categoria: 'Explosivos',
//         imagen: './src/img/frag-boomcha-1.png',
//         descripcion: 'Lorem ipsum',
//         precio: 99
//     },
//     {
//         id: 4,
//         articulo: 'Granada Frag',
//         marca: 'Boomcha',
//         modelo: 'K-BOOM-95',
//         categoria: 'Explosivos',
//         imagen: './src/img/frag-boomcha-2.png',
//         descripcion: 'Lorem ipsum',
//         precio: 149
//     },
//     {
//         id: 5,
//         articulo: 'Guantes',
//         marca: 'Elventine',
//         modelo: 'EL-100',
//         categoria: 'Vestimenta',
//         imagen: './src/img/guantes-elventine.jpg',
//         descripcion: 'Lorem ipsum',
//         precio: 350    
//     },
//     {
//         id: 6,
//         articulo: 'Pistola Deagle',
//         marca: 'Karmac',
//         modelo: 'DG-2000',
//         categoria: 'Armas de fuego',
//         imagen: './src/img/pistola-eagle-karmac.jpg',
//         descripcion: 'Lorem ipsum',
//         precio: 3200
//     },
//     {
//         id: 7,
//         articulo: 'Rifle Asalto',
//         marca: 'Aibuddy',
//         modelo: 'AB-20',
//         categoria: 'Armas de fuego',
//         imagen: './src/img/rifle-asalto-aibuddy.jpeg',
//         descripcion: 'Lorem ipsum',
//         precio: 2300
//     }
// ];

export const productosBase = [];

export const capturarProductos = async() => {
    try {
        const database = await fetch('./src/js/db.json');
        const productos = await database.json();

        productos.forEach(item => {
            productosBase.push(item);
        })
    } catch (error) {
        console.error('Error de acceso a base de datos', error);
    }
    
}

await capturarProductos();

export const productos = [];

class Producto {
    constructor(articulo, marca, modelo, categoria, imagen, descripcion, precio) {
        this.id = productos.length + 1;
        this.articulo = articulo;
        this.marca = marca;
        this.modelo = modelo;
        this.categoria = categoria;
        this.imagen = imagen;
        this.descripcion = descripcion;
        this.precio = precio
    }
};

productosBase.forEach(producto => {
    let nuevo = new Producto(producto.articulo,
                            producto.marca,
                            producto.modelo,
                            producto.categoria,
                            producto.imagen,
                            producto.descripcion,
                            producto.precio);
    productos.push(nuevo);
});


