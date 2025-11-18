let totalVotos = 0;

function votarDisenio() {
  let contador = document.getElementById("votos-diseno");
  let valorActual = parseInt(contador.textContent);
  contador.textContent = valorActual + 1;
  alert("¡Gracias por tu voto!");
  contarVoto();
}

function votarJs() {
  let contador = document.getElementById("votos-js");
  let valorActual = parseInt(contador.textContent);
  contador.textContent = valorActual + 1;
  alert("¡Gracias por tu voto!");
  contarVoto();
}

function votarBd() {
  let contador = document.getElementById("votos-bd");
  let valorActual = parseInt(contador.textContent);
  contador.textContent = valorActual + 1;
  alert("¡Gracias por tu voto!");
  contarVoto();
}

function contarVoto() {
  totalVotos++;
  if (totalVotos % 5 === 0) {
    console.log("Total acumulado de votos:", totalVotos);
  }
}
