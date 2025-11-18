function Persona(nombre, apellido){
    this.nombre = nombre;
    this.nombre = apellido;
     this.nombreCompleto = function(){
        return this.nombre + " " + this.apellido
     }
}
const persona1 = new Persona("Ana","Alvarado");
const persona2 = new Persona("Elker","Herrera");

console.log(persona1.nombreCompleto());
console.log(persona2.nombreCompleto());
console.log(persona2.nombre);