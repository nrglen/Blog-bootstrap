// Clase base
class Empleados {
    constructor(nombre, edad, salarioBase) {
        this.nombre = nombre;
        this.edad = edad;
        this.salarioBase = salarioBase;
    }

    obtenerDetalles() {
        return `Nombre: ${this.nombre}, Edad: ${this.edad}, Salario Base: ${this.salarioBase}`;
    }

    calcularSalario() {
        return this.salarioBase;
    }
}

// Clase hija: Gerente
class Gerente extends Empleados {
    constructor(nombre, edad, salarioBase, bonificacion) {
        super(nombre, edad, salarioBase);
        this.bonificacion = bonificacion;
    }

    obtenerDetalles() {
        return `${super.obtenerDetalles()}, Bonificación: ${this.bonificacion}`;
    }

    calcularSalario() {
        return this.salarioBase + this.bonificacion;
    }
}

// Nueva clase hija: Desarrollador
class Desarrollador extends Empleados {
    constructor(nombre, edad, salarioBase, lenguaje) {
        super(nombre, edad, salarioBase);
        this.lenguaje = lenguaje;
    }

    obtenerDetalles() {
        return `${super.obtenerDetalles()}, Lenguaje: ${this.lenguaje}`;
    }

    // El salario del desarrollador es igual al salario base
    calcularSalario() {
        return this.salarioBase;
    }
}

//  Ejemplo de uso
const empleado1 = new Empleados("Laura", 28, 2500);
console.log(empleado1.obtenerDetalles());
console.log("Salario total:", empleado1.calcularSalario());

const gerente1 = new Gerente("Andrés", 40, 4000, 1500);
console.log(gerente1.obtenerDetalles());
console.log("Salario total:", gerente1.calcularSalario());

const desarrollador1 = new Desarrollador("Carlos", 25, 3000, "JavaScript");
console.log(desarrollador1.obtenerDetalles());
console.log("Salario total:", desarrollador1.calcularSalario());
