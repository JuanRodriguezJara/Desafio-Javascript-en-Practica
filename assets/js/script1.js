let formulario = document.getElementById("formulario");
formulario.addEventListener("submit", function (event) {
    event.preventDefault();
    limpiarErrores();
    let nombre = document.querySelector(".textNombre").value;
    let asunto = document.querySelector(".textAsunto").value;
    let mensaje = document.querySelector(".textMensaje").value;
    let resultado = validar(nombre, asunto, mensaje);
    if(resultado == true) {
        exito();
    };
});

function limpiarErrores() {
    document.querySelector(".resultado").innerHTML = "";
    document.querySelector(".errorNombre").innerHTML = "";
    document.querySelector(".errorAsunto").innerHTML = "";
    document.querySelector(".errorMensaje").innerHTML = "";
};

function exito() {
    document.querySelector(".resultado").innerHTML = "Mensaje enviado con éxito !!!";
};

function validar(nombre, asunto, mensaje) {
    let pasamosLaValidacion = true;
    let validacionNombre = /[a-zA-Z]/gim;
    if (validacionNombre.test(nombre) == false) {
        document.querySelector(".errorNombre").innerHTML = "El nombre es requerido.";
        pasamosLaValidacion = false;
    };

    let validacionAsunto = /[a-zA-Z]/gim;
    if (validacionAsunto.test(asunto) == false) {
        document.querySelector(".errorAsunto").innerHTML = "El asunto es requerido.";
        pasamosLaValidacion = false;
    };

    let validacionMensaje = /[a-zA-Z]/gim;
    if (validacionMensaje.test(mensaje) == false) {
        document.querySelector(".errorMensaje").innerHTML = "El mensaje es requerido.";
        pasamosLaValidacion = false;
    };
    return pasamosLaValidacion;

};