const operadorSelect = document.getElementById("operador");
const boton = document.getElementById("boton");
const num1Input = document.getElementById("num1");
const num2Input = document.getElementById("num2");
const resultadoSpan = document.getElementById("resultado");

const verificarCondicion = () => {
    const num2 = parseFloat(num2Input.value)
    const operador = operadorSelect.value

    if (operador === "division" && num2 === 0) {
        boton.disabled = true
        return
    }
    boton.disabled = false
}

operadorSelect.addEventListener("change", verificarCondicion);
num2Input.addEventListener("keyup", verificarCondicion)

boton.addEventListener("click", (e) => {
    e.preventDefault(); 
    console.log("boton"); 

    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);
    const operador = operadorSelect.value;

    let resultado;

    switch (operador) {
        case "suma":
            resultado = num1 + num2;
            break;
        case "resta":
            resultado = num1 - num2;
            break;
        case "multiplicacion":
            resultado = num1 * num2;
            break;
        case "division":
            resultado = num1 / num2;
            break;
    }

    resultadoSpan.textContent = resultado;
});