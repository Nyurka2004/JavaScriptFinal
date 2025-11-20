const cambiarColor = () => {
    var color = document.getElementById("selectColor").value;
    document.getElementById("cuadroColor").style.backgroundColor = color;
};
const mostrarImagen = () => {
    var imagen = document.getElementById("selectImagen").value;
    document.getElementById("cuadroImagen").style.backgroundImage = `url('${imagen}')`;
};