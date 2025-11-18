let contador = 0;
const contadorElemento = document.getElementById('contador');
const btnIncrementar = document.getElementById('incrementar');
const btnDecrementar = document.getElementById('decrementar');

function actualizarContador() {
  contadorElemento.textContent = contador;
  contadorElemento.style.color = (contador >= 10) ? "red" : "black";
}

btnIncrementar.addEventListener('click', () => {
  contador++;
  actualizarContador();
});

btnDecrementar.addEventListener('click', () => {
  contador--;
  actualizarContador();
});
