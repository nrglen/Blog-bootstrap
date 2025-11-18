const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function pedirTemperatura() {
  rl.question("Ingresa una temperatura en grados Celsius: ", (celsius) => {
    celsius = parseFloat(celsius);

    if (isNaN(celsius)) {
      console.log("Error: Debes ingresar un número válido.\n");
      return pedirTemperatura();
    }

    let fahrenheit = (celsius * 9/5) + 32;
    let kelvin = celsius + 273.15;

    console.log(`${celsius}°C equivalen a:`);
    console.log(`Grados Kelvin: ${kelvin}`);
    console.log(`Grados Fahrenheit: ${fahrenheit}`);

    rl.close();
  });
}

pedirTemperatura();
