class Figura {
    constructor(color) {
        this.color = color;
    }

    area() {
        return 0;
    }
}

class Rectangulo extends Figura {
    constructor(color, base, altura) {
        super(color);
        this.base = base;
        this.altura = altura;
    }

    area() {
        return this.base * this.altura;
    }
}

class Circulo extends Figura {
    constructor(color, radio) {
        super(color);
        this.radio = radio;
    }

    area() {
        return Math.PI * (this.radio ** 2);
    }
}

const rectangulo1 = new Rectangulo("Rojo", 10, 5);
const circulo1 = new Circulo("Azul", 7);

console.log(`Rectángulo - Color: ${rectangulo1.color}, Área: ${rectangulo1.area()}`);
console.log(`Círculo - Color: ${circulo1.color}, Área: ${circulo1.area().toFixed(2)}`);
