// create 16x16 grid of square divs
// place them inside another container
// grids change color when you hover over them
// add a button that will send user a popup asking for number of squares per side

const container = document.getElementById('container');
const btn = document.getElementById('size');
let count = 16;
const fragment = new DocumentFragment();
const blackBtn = document.getElementById('black');
const randomBtn = document.getElementById('random');
const colorBtn = document.getElementById('color');
const pick = document.getElementById('pick');
const clearBtn = document.getElementById('clear');
const gridBtn = document.getElementById('grid');

function createCanvas() {
for (i = 0; i < (count*count); i++) {
    const box = document.createElement('div');
    box.classList.add('square');
    fragment.appendChild(box);
}
container.append(fragment);
}
createCanvas();
let grid = document.querySelectorAll('div.square');



grid.forEach(square => {
square.addEventListener('mouseover', () => {
    square.classList.add('hover');})
});

btn.addEventListener('change', () => {
    count = btn.value;
    resetCanvas();
})

function resetCanvas () {
    grid.forEach(element => element.remove());
    createCanvas();
    grid = document.querySelectorAll('div.square');
    grid.forEach(square => {
        square.addEventListener('mouseover', () => {
            square.classList.add('hover');})
        });
    document.documentElement.style.setProperty("--columns-row", count);
}
document.documentElement.style.setProperty("--columns-row", count);

function randomColor () {
    let r = Math.floor(Math.random()*255);
    let g = Math.floor(Math.random()*255);
    let b = Math.floor(Math.random()*255);
    return(r + ',' + g + ',' + b);
}

blackBtn.addEventListener('click', () => {
    grid.forEach(square => {
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = 'black';})
    });
})

randomBtn.addEventListener('click', () => {
    grid.forEach(square => {
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = `rgb(${randomColor()})`;})
    });
})

colorBtn.addEventListener('click', () => {
    grid.forEach(square => {
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = `${pick.value}`;})
    });
})

clearBtn.addEventListener('click', () => {
    grid.forEach(square => {
        square.style.backgroundColor = 'white'});
})

const sliderValue = document.createElement('div');
sliderValue.textContent = `${btn.value}x${btn.value}`;
sliderValue.classList.add('text');
btn.before(sliderValue);

btn.addEventListener('input', () => {
    sliderValue.textContent = `${btn.value}x${btn.value}`;
})

gridBtn.addEventListener('click', () => {
    grid.forEach(square => {
        square.classList.toggle('square')});
})