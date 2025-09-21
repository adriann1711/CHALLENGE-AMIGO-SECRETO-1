// Array vacío para almacenar los nombres
let amigos = [];

// Función para agregar un amigo al array
function agregarAmigo() {
  const input = document.getElementById("amigo");
  const nombre = input.value.trim();

  if (nombre === "") {
    alert("⚠️ Debes escribir un nombre");
    return;
  }

  amigos.push(nombre); // 👉 Guardamos el nombre en el array
  console.log(amigos); // 👉 Para confirmar en consola que se está guardando

  input.value = "";    // Limpiar el campo
  input.focus();       // Dejar listo para escribir otro
}
