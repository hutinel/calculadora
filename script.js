//funcion que borra el ultimo valor ingresado usando un slice
function deleteChar() {
    const display = document.getElementById("display-calculadora");
    display.value = display.value.slice(0, -1);
}

//funcion que limpia todos los caracteres del input cuando presionas asignado al boton "C"
function clearDisplay() {
    document.getElementById("display-calculadora").value = "";
}

//funcion que permite escribir el valor de cada boton en el texto input de forma que quedan concatenados"
function appendToDisplay(value) {
    const display = document.getElementById("display-calculadora");
    display.value += value;
}

/*funcion para el boton '=' que evalua los operandos ingresados y otorga un resultado
ademas con un try y catch para capturar el error y mostrar el valor error en pantalla.*/
function calcularResultado() {
    const display = document.getElementById("display-calculadora")
    try {
        display.value = eval(display.value);
    } catch(e) {
        display.value = "Error";
    }
}