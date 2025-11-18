class Vehiculo{
constructor(marca, modelo, anio) {
        this.marca = marca;
        this.modelo = modelo;
        this.anio = anio;
    }
    obtenerDetalles() {
        return `Marca: ${this.marca}, Modelo: ${this.modelo}, Año: ${this.anio}`;
    }
}
class Moto extends Vehiculo {
    constructor(marca, modelo, anio, cilindraje){
        super(marca, modelo, anio);
        this.cilindraje = cilindraje;
    }
        obtenerDetalles() {
        return `${super.obtenerDetalles()
        }, Cilindraje: ${this.cilindraje}`;
    }
}class Coche extends Vehiculo {
    constructor(marca, modelo, anio, numeroPuertas){
        super(marca, modelo, anio);
        this.numeroPuertas = numeroPuertas;
    }
        obtenerDetalles() {
        return `${super.obtenerDetalles()
        }, numeroPuertas: ${this.numeroPuertas}`;
    }
}
const vehiculo1 = new Vehiculo("Toyota", "Genérico", 2020);
console.log("Vehículo básico:");
console.log(vehiculo1.obtenerDetalles());

const coche1 = new Coche("Toyota", "Corolla", 2023, 4);
console.log("\nCoche:");
console.log(coche1.obtenerDetalles());

// Crear una moto
const moto1 = new Moto("Honda", "CBR", 2022, 600);
console.log("\nMoto:");
console.log(moto1.obtenerDetalles());
