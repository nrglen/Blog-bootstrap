
// Objeto Reproductor
function Reproductor() {
  this.estado = "detenido"; // Estado inicial

  // Método play()
  this.play = function() {
    if (this.estado === "detenido" || this.estado === "pausado") {
      this.estado = "reproduciendo";
      console.log("Reproduciendo música...");
    } else {
      console.log("La música ya se está reproduciendo.");
    }
  };

  // Método pausar()
  this.pausar = function() {
    if (this.estado === "reproduciendo") {
      this.estado = "pausado";
      console.log("La música se ha pausado.");
    } else {
      console.log("No hay música para pausar.");
    }
  };

  // Método detener()
  this.detener = function() {
    this.estado = "detenido";
    console.log("La música se ha detenido.");
  };
}

// Crear un reproductor
let miReproductor = new Reproductor();

// Probar los métodos
miReproductor.play();     // Reproduciendo música...
miReproductor.pausar();   // La música se ha pausado.
miReproductor.play();     // Reproduciendo música...
miReproductor.detener();  // La música se ha detenido.
