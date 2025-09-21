// ===============================
// Amigo Secreto - Lógica principal
// ===============================

let amigos = [];

// Recuperar lista guardada al cargar
window.onload = () => {
  const guardados = JSON.parse(localStorage.getItem("amigos"));
  if (guardados && guardados.length > 0) {
    amigos = guardados;
    mostrarAmigos();
    mostrarMensaje("✅ Lista recuperada de la sesión anterior", "ok");
  }
};

// Mostrar mensajes
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
    input.focus();
    return;
  }
  if (amigos.includes(nombre)) {
    mostrarMensaje("⚠️ Ese nombre ya está en la lista");
    input.focus();
    return;
  }

  amigos.push(nombre);
  guardarEnLocalStorage();
  input.value = "";
  input.focus();
  mostrarAmigos();
  mostrarMensaje("✅ Amigo añadido", "ok");
}

// Mostrar lista en pantalla
function mostrarAmigos() {
  const lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";
  amigos.forEach((a) => {
    const li = document.createElement("li");
    li.textContent = a;
    lista.appendChild(li);
  });
}

// Sortear un amigo
function sortearAmigo() {
  if (amigos.length === 0) {
    mostrarMensaje("⚠️ Primero agrega al menos un amigo");
    return;
  }
  const indice = Math.floor(Math.random() * amigos.length);
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = `<li>🎉 El amigo secreto es: <strong>${amigos[indice]}</strong></li>`;
  mostrarMensaje("✅ Sorteo realizado con éxito", "ok");
}

// Reiniciar lista
function reiniciarLista() {
  amigos = [];
  localStorage.removeItem("amigos");
  document.getElementById("listaAmigos").innerHTML = "";
  document.getElementById("resultado").innerHTML = "";
  mostrarMensaje("🔄 Lista reiniciada", "ok");
}

// Guardar en LocalStorage
function guardarEnLocalStorage() {
  localStorage.setItem("amigos", JSON.stringify(amigos));
}
