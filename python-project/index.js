const persona1 = {
    nombre: "maria",
    apellido: "cediel",
    nombreCompleto: function(){
        return this.nombre + " " + this.apellido
    }
};
console.log(persona.nombreCompleto());
const persona2 = {
    nombre: "paula",
    apellido: "arboleda",
    nombreCompleto: persona.nombreCompleto
};
console.log(persona2.nombreCompleto());