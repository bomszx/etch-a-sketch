let gridContainer = document.querySelector('.grid-container');
let grid = document.querySelector('.grid');
let gridItem = document.querySelector('.grid-item')
let h1 = document.createElement('h1');

// For some reason, I need to add a div that I can apply my grid templates to? Not create a div and apply the grid template in one go. I think the div has to be created first before we can applly our gridtemplates
function divMaker(num) {
    for(i = 0; i < num; i++) {
        let div = document.createElement('div');
        div.className = 'grid-item';
        gridContainer.append(div);
        div.addEventListener('mouseover', brush)
    }
}

function gridMaker (row, col) {
    gridContainer.style.gridTemplateColumns = `repeat(${col}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${row}, 1fr)`;
    for(let i = 0; i < row; i++) {
        divMaker(col);
    }
}

function brush(e) {
    let color = [, "#55CBCD", "#E7993C",
    "#869F9F", "#C6DFCD", "#A7BED3", "#C6E2E9", "#F1FFC4"];

    this.style.backgroundColor = color[Math.floor(Math.random() * color.length)];
}
