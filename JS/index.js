const colors = ['green', 'red', 'rgb(133,122,200)', '#f15025'];

const boton = document.getElementById('btn');
const color = document.querySelector('.color');

boton.onclick = function (e) {
    const index = Math.floor(Math.random() * colors.length);

    document.body.style.backgroundColor = colors[index];
    color.innerText = colors[index];
}