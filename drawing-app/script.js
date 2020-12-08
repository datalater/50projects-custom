const canvas = document.getElementById('canvas');
canvas.width = document.body.clientWidth * 0.9;
canvas.height = document.body.clientHeight * 0.9;
const ctx = canvas.getContext('2d');
const clearBtn = document.getElementById('clear');
const inputColor = document.getElementById('color');
const sizeSpan = document.getElementById('size');
const increase = document.getElementById('increase');
const decrease = document.getElementById('decrease');
const exportBtn = document.getElementById('export');
const exportImg = document.getElementById('export-img');

let size = parseInt(sizeSpan.innerText);
let isPressed = false;
let color = 'black';
let x;
let y;

canvas.addEventListener('mousedown', (e) => {
    isPressed = true;

    x = e.offsetX;
    y = e.offsetY;
});

canvas.addEventListener('mouseup', (e) => {
    isPressed = false;

    x = undefined;
    y = undefined;
});

canvas.addEventListener('mousemove', (e) => {
    if (isPressed) {
        const x2 = e.offsetX;
        const y2 = e.offsetY;

        drawCircle(x2, y2);
        drawLine(x, y, x2, y2);

        x = x2;
        y = y2;
    }
});

function drawCircle(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
}

function drawLine(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = color;
    ctx.lineWidth = size * 2;
    ctx.stroke();
}

inputColor.addEventListener('change', (e) => {
    console.log(e.target.value);
    color = e.target.value;
});

clearBtn.addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});

increase.addEventListener('click', () => {
    size += 5;
    sizeSpan.innerText = size;
});

decrease.addEventListener('click', () => {
    size -= 5;

    if (size <= 0) {
        size = 0;
    }
    sizeSpan.innerText = size;
});

exportBtn.addEventListener('click', () => {
    exportImg.style.display = 'inline-flex';
    exportImg.src = canvas.toDataURL('image/png');
})

exportImg.addEventListener('click', () => {
    var gh = canvas.toDataURL('png');

    var a = document.createElement('a');
    a.href = gh;
    a.download = 'image.png';

    a.click()
})