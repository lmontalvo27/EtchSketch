
//testing adding div then creating grid
const gridContainer = document.querySelector('.grid-container');
const clearButton = document.querySelector('#reset-button');
const resizeButton = document.querySelector('#resize-button');
//let gridSize = handleClick();
let Default = 16;


function createGrid(grid){
    userInput = grid;
    fittedGrid = grid * grid;

    for (i = 0; i < fittedGrid; i++) {
        const gridItem = document.createElement('div');
        gridItem.classList.add('box');
        gridItem.style.height = `calc(100% /${userInput} )`;
        gridItem.style.width = `calc(100% / ${userInput})`;

        gridItem.addEventListener('mouseover', () => {
            gridItem.style.backgroundColor = 'black';
        })

        gridContainer.appendChild(gridItem);
    
    }
}
function resetGrid () {
    
    const boxes = gridContainer.querySelectorAll('.box');
    boxes.forEach(box => {
        box.style.backgroundColor = 'white';
    });

}
createGrid(Default);

clearButton.addEventListener('click', resetGrid);

function handleClick() {
    let message = 'Enter Grid Size: ';
    let limitMsg = 'Enter a number below 100: ';
    let userValue = prompt(message);
    if (userValue > 100) {
        alert(limitMsg);
    }
    else {
        const oldBoxes = gridContainer.querySelectorAll('.box');
        oldBoxes.forEach(box=> box.remove());
        createGrid(userValue); //updates but doesnt look correctly
    }
}

//add button top of screen with a pop up for grid size
//add limit of 100 and no less than 16