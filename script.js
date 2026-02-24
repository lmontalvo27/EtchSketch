
//testing adding div then creating grid
const gridContainer = document.querySelector('.grid-container');

let gridSize = 64;
let Default = gridSize * gridSize;



function createGrid(grid){

    for (i = 0; i < grid; i++) {
        const gridItem = document.createElement('div');
        gridItem.classList.add('box');
        gridItem.style.height = `calc(100% /${gridSize} )`;
        gridItem.style.width = `calc(100% / ${gridSize})`;


        gridContainer.appendChild(gridItem);
    
    }
   
}

createGrid(Default);

//grid.appendChild();

//Create a 16x16 grid of square divs using jsn inside the div grid container
// use flexbox to have divs appear as a grid
//borders and margins can adjust size of squares
//set up hover effect when mouse hovers leaving a pixelated trail