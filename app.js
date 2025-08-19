let listaDeAmigos = [];

function agregarAmigo() {
    let inputAmigo = document.getElementById("amigo");
    let nombre = inputAmigo.value.trim();

    if (nombre === "") {
        alert("Debes de capturar un nombre");
        return;
    }

    if (listaDeAmigos.includes(nombre)) {
        alert("Este nombre se encuentra duplicado, intenta con otro");
        inputAmigo.value = "";
        return;
    }

    listaDeAmigos.push(nombre);
    mostrarListaAmigos();
    inputAmigo.value = "";
}

function mostrarListaAmigos() {
    let listaUI = document.getElementById("listaAmigos");
    listaUI.innerHTML = "";

    listaDeAmigos.forEach(nombre => {
        let li = document.createElement("li");
        li.textContent = nombre;    
        listaUI.appendChild(li);
    });
}

function sortearAmigo() {
    if (listaDeAmigos.length === 0) {
        alert("Por favor, agrega al menos un nombre para el sorteo");
        return;
    }

    // Selecciona un nombre aleatorio de la lista
    let indiceAleatorio = Math.floor(Math.random() * listaDeAmigos.length);
    let amigoSecreto = listaDeAmigos[indiceAleatorio];

    // Muestra el resultado en la lista con id="resultado"
    let resultadoUI = document.getElementById("resultado");
    resultadoUI.innerHTML = "";
    
    let li = document.createElement("li");
    li.textContent = `El amigo secreto ELEGIDO  es: ${amigoSecreto} 🎉`;
    resultadoUI.appendChild(li);

    // --- Reinicio automático del juego ---
    setTimeout(() => {
        // Limpia el arreglo de amigos
        listaDeAmigos = [];
        
        // Limpia la lista de amigos en la interfaz
        document.getElementById("listaAmigos").innerHTML = "";
        
        // Limpia el resultado del sorteo
        document.getElementById("resultado").innerHTML = "";
        
        alert("Juego reniciado ¡Juegomos nuevamente!");
    }, 1800); // 100 milisegundos = 3 segundos
}