let div = document.createElement('div');

function createGrid(number) {
    for(i = 0; i < number * number; i++) {
        let div = document.createElement('div');
        let mainContainer = document.querySelector('.main-container');
        div.className = 'grid';
        mainContainer.append(div)
    }
} 