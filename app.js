
let amigos = [];

// Al cargar la página, recuperamos la lista guardada en LocalStorage
window.onload = () => {
  const guardados = JSON.parse(localStorage.getItem("amigos"));
  if (guardados && guardados.length > 0) {
    amigos = guardados;
    mostrarAmigos();
    mostrarMensaje("✅ Lista recuperada de la sesión anterior", "ok");
  }
};

// Función para mostrar mensajes en pantalla
function mostrarMensaje(texto, tipo = "error") {
  const mensaje = document.getElementById("mensaje");
  mensaje.textContent = texto;
  mensaje.className = `mensaje ${tipo}`;
}

// Agregar un nuevo amigo
function agregarAmigo() {
  const input = document.getElementById("amigo");
  const nombre = input.value.trim();

  if (nombre === "") {
    mostrarMensaje("⚠️ Debes escribir un nombre");
    return;
  }
  if (amigos.includes(nombre)) {
    mostrarMensaje("⚠️ Ese nombre ya está en la lista");
    return;
  }

  amigos.push(nombre);
  guardarEnLocalStorage();
  input.value = "";
  mostrarAmigos();
  mostrarMensaje("✅ Amigo añadido", "ok");
}

// Mostrar la lista de amigos en pantalla
function mostrarAmigos() {
  const lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";
  amigos.forEach((a) => {
    const li = document.createElement("li");
    li.textContent = a;
    lista.appendChild(li);
  });
}

// Sortear un amigo al azar
function sortearAmigo() {
  if (amigos.length === 0) {
    alert("Primero agrega al menos un amigo");
    return;
  }
  const indice = Math.floor(Math.random() * amigos.length);
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = `<li>🎉 El amigo secreto es: <strong>${amigos[indice]}</strong></li>`;
}


// Reiniciar la lista completa
function reiniciarLista() {
  amigos = [];
  localStorage.removeItem("amigos");
  document.getElementById("listaAmigos").innerHTML = "";
  document.getElementById("resultado").innerHTML = "";
  mostrarMensaje("🔄 Lista reiniciada", "ok");
}

// Guardar lista en LocalStorage
function guardarEnLocalStorage() {
  localStorage.setItem("amigos", JSON.stringify(amigos));
}

