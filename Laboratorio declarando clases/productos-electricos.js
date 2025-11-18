class Producto {
    constructor(nombre, precio, marca) {
        this.nombre = nombre;
        this.precio = precio;
        this.marca = marca;
    }

    descripcion() {
        return `Producto: ${this.nombre}, Precio: ${this.precio}, Marca: ${this.marca}`;
    }
}

class Telefono extends Producto {
    constructor(nombre, precio, marca, almacenamiento, ram) {
        super(nombre, precio, marca);
        this.almacenamiento = almacenamiento;
        this.ram = ram;
    }

    descripcion() {
        return `${super.descripcion()}, Almacenamiento: ${this.almacenamiento}GB, RAM: ${this.ram}GB`;
    }
}

class Laptop extends Producto {
    constructor(nombre, precio, marca, procesador, pulgadas) {
        super(nombre, precio, marca);
        this.procesador = procesador;
        this.pulgadas = pulgadas;
    }

    descripcion() {
        return `${super.descripcion()}, Procesador: ${this.procesador}, Pulgadas: ${this.pulgadas}"`;
    }
}

const telefono1 = new Telefono("Galaxy S24", 3500000, "Samsung", 256, 12);
const laptop1 = new Laptop("Asus Vivobook", 4200000, "Asus", "Intel Core i7", 15.6);
const producto1 = new Producto("Audífonos", 150000, "Sony");

console.log(telefono1.descripcion());
console.log(laptop1.descripcion());
console.log(producto1.descripcion());
