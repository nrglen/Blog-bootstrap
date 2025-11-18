// Objeto Libro
function Libro(titulo, autor) {
  this.titulo = titulo;
  this.autor = autor;
  this.prestado = false;

  this.prestar = function() {
    if (this.prestado === false) {
      this.prestado = true;
      console.log("Libro prestado correctamente.");
    } else {
      console.log("Este libro ya está prestado.");
    }
  }
}

// Probar el libro
let libro1 = new Libro("Sangre de campeón", "Carlos Cuauhtémoc Sánchez");
libro1.prestar();
libro1.prestar();
