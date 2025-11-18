// Objeto Lista de Compras
function ListaCompras() {
  this.productos = []; // Lista vacía al inicio

  // Método para agregar productos
  this.agregar = function(producto) {
    this.productos.push(producto);
  };

  // Método para mostrar los productos
  this.mostrar = function() {
    console.log("Lista de compras:");
    for (let i = 0; i < this.productos.length; i++) {
      console.log((i + 1) + ". " + this.productos[i]);
    }
  };
}

// Crear una nueva lista
let lista = new ListaCompras();

// Agregar productos
lista.agregar("Manzanas");
lista.agregar("Leche");
lista.agregar("Pan");

// Mostrar la lista completa
lista.mostrar();
