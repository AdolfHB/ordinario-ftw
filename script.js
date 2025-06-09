function agregarAlCarrito(producto) {
  const lista = document.getElementById("lista-carrito");
  const item = document.createElement("li");
  item.textContent = producto;
  lista.appendChild(item);
}

function mostrarSeccion(id) {
  const secciones = document.querySelectorAll(".seccion");
  secciones.forEach(seccion => {
    seccion.classList.add("oculto");
  });
  document.getElementById(id).classList.remove("oculto");
}

document.getElementById("btn-carrito").addEventListener("click", () => {
  document.getElementById("modal-carrito").classList.remove("oculto");
});

document.getElementById("cerrar-carrito").addEventListener("click", () => {
  document.getElementById("modal-carrito").classList.add("oculto");
});