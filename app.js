let gridContainer = document.querySelector('.grid-container');
let grid = document.querySelector('.grid');
let h1 = document.createElement('h1');

// div.className = 'grid-item';
h1.innerText = 'testing'


// I think we need to create the div first before we insert the grid templates

// gridContainer.style.gridTemplateColumns = `repeat(4, 1fr)`;
// gridContainer.style.gridTemplateRows = `repeat(4, 1fr)`;


// 

// For some reason, I need to add a div that I can apply my grid templates to? Not create a div and apply the grid template in one go.

function divMaker(num) {
    for(i = 0; i < num; i++) {
        let div = document.createElement('div');
        div.className = 'grid-item';
        gridContainer.append(div);

        
    }
}

function gridMaker (row, col) {
    gridContainer.style.gridTemplateColumns = `repeat(${col}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${row}, 1fr)`;
    for(let i = 0; i < row; i++) {
        divMaker(col);
    }
}
