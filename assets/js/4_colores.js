/*
Dentro del script agrega el evento para que al hacer click a cada uno de los
divs, este cambie de color al color negro. Utiliza addEventListener para
agregar el evento. */
// estoy es de las cajas de box1, box2, etc del style.css
function pintar(){
box1.style.backgroundColor = 'black'
}
const box1 = document.getElementById("box1")
box1.addEventListener("click", pintar);

