// ===============================
// Amigo Secreto - Lógica principal
// ===============================

// Array vacío para almacenar los nombres
let amigos = [];

// Función para agregar un amigo
function agregarAmigo() {
  const input = document.getElementById("amigo");
  const nombre = input.value.trim();

  // Validar que no esté vacío
  if (nombre === "") {
    alert("⚠️ Por favor, inserta un nombre.");
    return;
  }

  // Agregar al array
  amigos.push(nombre);

  // Actualizar la lista en pantalla
  mostrarAmigos();

  // Limpiar el campo
  input.value = "";
  input.focus();
}

// Función para mostrar la lista de amigos en pantalla
function mostrarAmigos() {
  const lista = document.getElementById("listaAmigos");

  // Limpiar la lista antes de volver a pintarla
  lista.innerHTML = "";

  // Recorrer el array y crear un <li> por cada amigo
  for (let i = 0; i < amigos.length; i++) {
    const li = document.createElement("li");
    li.textContent = amigos[i];
    lista.appendChild(li);
  }
}

// Función para sortear un amigo
function sortearAmigo() {
  const resultado = document.getElementById("resultado");

  // Validar que haya amigos en la lista
  if (amigos.length === 0) {
    alert("⚠️ No hay amigos para sortear. Agrega al menos uno.");
    return;
  }

  // Generar un índice aleatorio
  const indiceAleatorio = Math.floor(Math.random() * amigos.length);

  // Obtener el nombre sorteado
  const amigoSorteado = amigos[indiceAleatorio];

  // Mostrar el resultado en pantalla
  resultado.innerHTML = `<li>🎉 El amigo secreto es: <strong>${amigoSorteado}</strong></li>`;
}

// Función para reiniciar la lista
function reiniciarLista() {
  amigos = []; // Vaciar el array
  document.getElementById("listaAmigos").innerHTML = "";
  document.getElementById("resultado").innerHTML = "";
}
