let grid = document.querySelector('.grid');
let gridItem = document.querySelector('.grid-item')
let gridContainer = document.querySelector('.grid-container');
let resetButton = document.getElementById('reset')
let blackButton = document.getElementById('black');
let colorButton = document.getElementById('colored');

// Reset
resetButton.addEventListener('click', function() {
    window.location.reload();
    
})



// For some reason, I need to add a div that I can apply my grid templates to? Not create a div and apply the grid template in one go. I think the div has to be created first before we can applly our gridtemplates

function divMaker(num) {
    for(i = 0; i < num; i++) {
        let div = document.createElement('div');
        div.className = 'grid-item';
        div.value = 'cell';
        gridContainer.append(div)
        div.addEventListener('mouseover', blackBrush)
    }
}

function gridMaker (row, col) {
    gridContainer.style.gridTemplateColumns = `repeat(${col}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${row}, 1fr)`;
    for(let i = 0; i < row; i++) {
        divMaker(col);
    }
}

function blackBrush() {
        this.style.backgroundColor = 'black';
}

function coloredBrush() {
    let color = [, "#00a5e3", "#8dd7bf",
    "#ff96c5", "#ff5768", "#ffbf65", "#fc6238", "#ffd872", "#f2d4cc", "#e77577", "#6c88c4", "#c05780", "#ff828b", "#f2d4cc", "#00b0ba", "#cff800", "#74737a", "#ffec59", "#00cdac", "fc6238", "#0065a2"];
    
    this.style.backgroundColor = color[Math.floor(Math.random() * color.length)];
}

function changeColor() {
    console.log(div)
    div.removeEventListener('mouseover', blackBrush);
    div.addEventListener('mouseover', coloredBrush);
}

function prompter() {
    let num = prompt('Enter a number from 5-64', 64) 
        if(num <= 5 || num >= 101) {
            console.log(`num too big, we may crash`)
        } else {
            gridMaker(num,num)
        }
    }   


colorButton.addEventListener('click', changeColor)
blackButton.addEventListener('click', blackBrush)

prompter() 