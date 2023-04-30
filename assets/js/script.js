// Obtiene el valor de cualquier botón
//lama a la funcion getValue
function getValue(buttonValue) {
  //obtenemos el contenido del boton
  var key = document.getElementById(buttonValue).innerHTML;
  console.log(key);
  //obtenemos el valor en pantalla
  var screen = document.getElementById("screen").value;
  // agregamos el boton presionado a la pantalla
  document.getElementById("screen").value = screen + key;
}

// Ingresa el valor del botón cero.
function getZero() {
  var key = "0";
  var screen = document.getElementById("screen").value;
  document.getElementById("screen").value = screen + key;
}
//Agrega un decimal.
function addDecimal() {
  var screen = document.getElementById("screen").value;
  document.getElementById("screen").value = screen + ".";
  console.log(screen);
}
//Borra o limpia toda la pantalla.
function clearScreen() {
  var screen = (document.getElementById("screen").value = "");
}

//Resuelve las operaciones aritméticas
function solve() {
  var screen = document.getElementById("screen").value;
  console.log("solve " + screen);
  console.log("solve " + eval(screen));
  //obtiene el valor de la pantalla lo envia a eval( para que compruebe)
  var screen = (document.getElementById("screen").value = eval(screen));
}
// suma
//llama la funcion
function suma() {
  //obtiene el valor de la pantalla
  var screen = document.getElementById("screen").value;
  //obtiene el ultimo caracter
  var lastChar = screen[screen.length - 1];
  //evalua si es diferente a
  if (
    screen !== "" &&
    lastChar !== "+" &&
    lastChar !== "-" &&
    lastChar !== "*" &&
    lastChar !== "/"
  ) {
    // envia simbolo a la pantalla para que evalo lo procese
    document.getElementById("screen").value = screen + "+";
  }
}

//resta
function resta() {
    var screen = document.getElementById("screen").value;
    var lastChar = screen[screen.length - 1];

    if (screen !== "" && (lastChar !== "+" && lastChar !== "-" && lastChar !== "*" && lastChar !== "/")) {
        document.getElementById("screen").value = screen + "-";
    }
}

//multiplicación
function multiplicacion() {
  var screen = document.getElementById("screen").value;
  var lastChar = screen[screen.length - 1];

  if (
    screen !== "" &&
    lastChar !== "+" &&
    lastChar !== "-" &&
    lastChar !== "*" &&
    lastChar !== "/"
  ) {
    document.getElementById("screen").value = screen + "*";
  }
}

//división
function division() {
  var screen = document.getElementById("screen").value;
  var lastChar = screen[screen.length - 1];

  if (
    screen !== "" &&
    lastChar !== "+" &&
    lastChar !== "-" &&
    lastChar !== "*" &&
    lastChar !== "/"
  ) {
    document.getElementById("screen").value = screen + "/";
  }
}