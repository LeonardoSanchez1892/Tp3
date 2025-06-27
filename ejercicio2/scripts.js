const listaPalabras = [
    "manzana",
    "banana",
    "pera",
    "durazno",
    "frutilla",
    "mango",
]

const entrada = document.getElementById("entrada")
const boton = document.getElementById("btnFiltrar")
const resutado = document.getElementById("resultado")
const mensaje = document.getElementById("mensaje")

boton.addEventListener("click", (e) => {
    e.preventDefault()

    const texto = entrada.value.trim().toLowerCase()
    resutado.innerHTML = ""
    mensaje.textContent = ""

    if(texto === "") {
        mensaje.textContent = "Por favor, ingresa un texto para filtrar."
        return
    }

    const filtrados = listaPalabras.filter((palabra) =>
    palabra.toLowerCase().includes(texto)
    )

    if (filtrados.length === 0) {
        mensaje.textContent = "No se encontraron coincidencias."
    } else {
        filtrados.forEach((palabra) => {
            const li = document.createElement("li")
            li.textContent = palabra
            resultado.appendChild(li)
        })
    }
})