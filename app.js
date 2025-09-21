// Agregar un nuevo amigo
function agregarAmigo() {
  const input = document.getElementById("amigo");
  const nombre = input.value.trim();

  if (nombre === "") {
    mostrarMensaje("⚠️ Debes escribir un nombre");
    input.focus(); // vuelve a enfocar el input
    return;
  }
  if (amigos.includes(nombre)) {
    mostrarMensaje("⚠️ Ese nombre ya está en la lista");
    input.focus();
    return;
  }

  amigos.push(nombre);
  guardarEnLocalStorage();
  input.value = "";      // limpia el campo
  input.focus();         // vuelve a poner el cursor en el input
  mostrarAmigos();
  mostrarMensaje("✅ Amigo añadido", "ok");
}
