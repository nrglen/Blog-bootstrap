class Animal {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    emitirSonido() {
        return "Este animal emite un sonido.";
    }
}

class Perro extends Animal {
    constructor(nombre, edad) {
        super(nombre, edad);
    }

    emitirSonido() {
        return "El perro ladra: ¡Guau guau!";
    }
}

class Gato extends Animal {
    constructor(nombre, edad) {
        super(nombre, edad);
    }

    emitirSonido() {
        return "El gato maúlla: ¡Miau!";
    }
}

const perro1 = new Perro("Max", 4);
const gato1 = new Gato("Luna", 2);

console.log(`${perro1.nombre} (${perro1.edad} años): ${perro1.emitirSonido()}`);
console.log(`${gato1.nombre} (${gato1.edad} años): ${gato1.emitirSonido()}`);
