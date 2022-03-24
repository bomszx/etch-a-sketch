//  query selectors

let grid = document.querySelector('.grid');
let gridItem = document.querySelector('.grid-item')
let gridContainer = document.querySelector('.grid-container');
let resetButton = document.getElementById('reset')
let blackButton = document.getElementById('black');
let colorButton = document.getElementById('colored');

// reset
resetButton.addEventListener('click', function() {
    window.location.reload();
    
})

// prompt that would ask the user how many divs the user wants
function prompter() {
    let num = prompt('Enter a number from 5-64', 64) 
        if(num <= 5 || num > 64) {
            alert(`please choose a number between 5-64`)
            prompter()
        } else {
            gridMaker(num,num)
        }
    }   

// create divs using DOM manipulation
function gridMaker (row, col) {
    gridContainer.style.gridTemplateColumns = `repeat(${col}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${row}, 1fr)`;
    for(let i = 0; i < row; i++) {
        divMaker(col);
    }
}

// we need to create the divs first before we can arrange them as griditems, used mouseover event then ran the blackBrush function for the palette
function divMaker(num) {
    for(i = 0; i < num; i++) {
        let div = document.createElement('div');
        div.className = 'grid-item';
        div.value = 'cell';
        gridContainer.append(div)
        div.addEventListener('mouseover', blackBrush)
    }
}

// black palette, using this
function blackBrush() {
        this.style.backgroundColor = 'black';
}

function coloredBrush() {
    let color = [, "#00a5e3", "#8dd7bf",
    "#ff96c5", "#ff5768", "#ffbf65", "#fc6238", "#ffd872", "#f2d4cc", "#e77577", "#6c88c4", "#c05780", "#ff828b", "#f2d4cc", "#00b0ba", "#cff800", "#74737a", "#ffec59", "#00cdac", "fc6238", "#0065a2"];
    
    this.style.backgroundColor = color[Math.floor(Math.random() * color.length)];
}

// initialize
prompter() 