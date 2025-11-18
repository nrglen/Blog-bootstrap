// Objeto Carrito
function Carrito() {
  this.productos = []; // Lista vacía
  this.total = 0;      // Total inicial

  // Método para agregar productos
  this.agregarProducto = function(nombre, precio) {
    this.productos.push({ nombre: nombre, precio: precio });
    this.total += precio;
    console.log("Añadiste " + nombre + " al carrito por $" + precio);
  };

  // Método para calcular descuento
  this.calcularDescuento = function() {
    if (this.total > 100) {
      let descuento = this.total * 0.10;
      this.total -= descuento;
      console.log("¡Tienes un descuento del 10%! Tu total ahora es $" + this.total.toFixed(2));
    } else if (this.total > 50 && this.total <= 100) {
      let descuento = this.total * 0.05;
      this.total -= descuento;
      console.log("¡Descuento del 5%! Tu total con descuento es $" + this.total.toFixed(2));
    } else {
      console.log("No hay descuento esta vez. Total a pagar: $" + this.total.toFixed(2));
    }
  };
}

// Crear un nuevo carrito
let miCarrito = new Carrito();

// Agregar 3 frutas al carrito
miCarrito.agregarProducto("Manzanas", 20);
miCarrito.agregarProducto("Naranjas", 40);
miCarrito.agregarProducto("Uvas", 30);

// Calcular el descuento final
miCarrito.calcularDescuento();
