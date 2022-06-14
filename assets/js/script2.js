var evento = document.querySelectorAll(".evento");
let color = function (a) {
    let BgColor = this.style.backgroundColor
    let caja = document.getElementById("caja");
    caja.style.backgroundColor = BgColor
}
evento.forEach((button) => {
    button.addEventListener('click', color)
});





