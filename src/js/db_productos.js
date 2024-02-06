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


