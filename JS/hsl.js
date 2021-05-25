const boton = document.getElementById('btn');
const textColor = document.querySelector('.color');

function randomPer() {
    return Math.floor(Math.random() * 101);
}

boton.onclick = function () {
    let randomNum = Math.floor(Math.random() * 360);
    
    let randomHsl = `hsl(${randomNum}, ${randomPer()}%, ${randomPer()}%)`;

    document.body.style.backgroundColor = randomHsl;
    textColor.innerText = randomHsl;
}