let gridContainer = document.querySelector('.grid-container');
let grid = document.querySelector('.grid');
let h1 = document.createElement('h1');
let div = document.createElement('div');

// div.className = 'grid-item';
div.innerText = 'test'
gridContainer.style.gridTemplateColumns = `repeat(2, 1fr)`;
gridContainer.style.gridTemplateRows = `repeat(2, 1fr)`;

gridContainer.append(div);
// 


