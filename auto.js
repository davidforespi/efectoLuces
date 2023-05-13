// Obtén una referencia al contenedor del auto
const auto = document.getElementById("auto");

// Crea las luces y añádelas al auto
for (let i = 0; i < 8; i++) {
    const light = document.createElement("div");
    light.classList.add("light");
    auto.appendChild(light);
}

// Variables para controlar la animación
let currentIndex = 0;
let currentLight = auto.children[currentIndex];
let interval;

// Función para cambiar la luz actual
function changeLight() {
    currentLight.style.backgroundColor = "black"; // Apaga la luz actual

    currentIndex = (currentIndex + 1) % auto.children.length; // Calcula el índice del siguiente cuadro
    currentLight = auto.children[currentIndex];

    currentLight.style.backgroundColor = "red"; // Enciende la luz del siguiente cuadro
}

// Función para iniciar la animación
function startAnimation() {
    interval = setInterval(changeLight, 100); // Cambia de luz cada 100 milisegundos
}

// Función para detener la animación
function stopAnimation() {
    clearInterval(interval);
}

// Inicia la animación al cargar la página
startAnimation();
