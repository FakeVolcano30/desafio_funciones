function pintar(){
box1.style.backgroundColor = 'black'
}
const box1 = document.getElementById("box1")
box1.addEventListener("click", pintar);

document.addEventListener('keydown', function (event) {
if (event.key === 'a') {
key.style.backgroundColor = 'pink'
} else if (event.key === 's') {
key.style.backgroundColor = 'orange'
} else if (event.key === 'd') {
key.style.backgroundColor = 'lightblue'
}
});

const contenedorCajas = document.getElementById("cajas");

document.addEventListener('keydown', function(event) {
    let newColor;

    if (event.key === 'q') {
        newColor = 'purple';
    } else if (event.key === 'w') {
        newColor = 'gray';
    } else if (event.key === 'e') {
        newColor = 'brown';
    }

    if (newColor) {
        const nuevoDiv = document.createElement("div");
        nuevoDiv.classList.add("nueva-caja");
        nuevoDiv.style.backgroundColor = newColor;
        contenedorCajas.appendChild(nuevoDiv);
    }
});