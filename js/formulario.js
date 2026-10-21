const formulario = document.getElementById("formComentario");
const mensaje = document.getElementById("mensaje");
const cerrarModal = document.getElementById("cerrarModal");
const nombrePersona = document.getElementById("nombre");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();
    
console.log(nombrePersona);
    mensaje.style.display = "flex";

    formulario.reset();
});

cerrarModal.addEventListener("click", function() {
    mensaje.style.display = "none";

});