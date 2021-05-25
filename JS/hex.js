const boton = document.getElementById('btn');
const textColor = document.querySelector('.color');

const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

function randomValue() {
    let random = Math.floor(Math.random() * hex.length);
    return hex[random];
}

boton.onclick = function () {
    let randomColor = '#' + randomValue() + randomValue() + randomValue() + randomValue() + randomValue() + randomValue();

    document.body.style.backgroundColor = randomColor;
    textColor.innerText = randomColor;
}