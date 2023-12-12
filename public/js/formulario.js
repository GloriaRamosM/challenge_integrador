const submitForm = (event) => {
  event.preventDefault();

  // Obtener los valores del formulario
  let nombre = document.getElementById("nombre").value;
  let email = document.getElementById("email").value;
  let mensaje = document.getElementById("mensaje").value;

  // Aquí puedes realizar acciones con los datos, como enviarlos a un servidor o mostrarlos en la consola
  console.log("Nombre: " + nombre);
  console.log("Email: " + email);
  console.log("Mensaje: " + mensaje);

  // Puedes agregar aquí el código para enviar los datos a un servidor mediante AJAX, por ejemplo.
};

// Usar addEventListener para manejar el evento click del botón
document.getElementById("submitButton").addEventListener("click", submitForm);
