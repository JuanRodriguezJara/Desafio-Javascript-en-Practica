// Esto solo se encargara de sumar
document.querySelector("#btnsumar").addEventListener("click", () => {
    const valor1 = parseInt(document.querySelector("#valor1").value);
    const valor2 = parseInt(document.querySelector("#valor2").value);
    result = valor1 + valor2;
    // Lee el elemento html Span toma el ID y le agrega el resultado
    document.getElementById("result").textContent = result;
});

// Esto solo se encargara de restar
document.querySelector("#btnrestar").addEventListener("click", () => {
    const valor1 = parseInt(document.querySelector("#valor1").value);
    const valor2 = parseInt(document.querySelector("#valor2").value);
    const btnrestar = document.querySelector("#btnsumar").value;
    result = valor1 - valor2;
    // Resultado de la resta, si la resta da negativo muestro 0
    if (result < 0) {
        result = 0;
    }
    // Lee el elemento html Span toma el ID y le agrega el resultado
    document.getElementById("result").textContent = result;
});
