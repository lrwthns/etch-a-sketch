const gridContainerParent = document.querySelector('#mainContainerParent');
const resetButton = document.querySelector('#reset');
const numSelection = document.querySelector('#numSelection');


resetButton.addEventListener('click', () => {
    clearGrid();
    createGrid(numSelection.value);
})

numSelection.addEventListener('change', () => {
    clearGrid();
    let size = numSelection.value;
    createGrid(size);
})

function clearGrid () {
    while (gridContainerParent.firstChild) {
        gridContainerParent.firstChild.remove();
    }
}

function createGrid (size) {
    let gridContainer = document.createElement('div');
    gridContainer.setAttribute("id", "mainContainer")
    gridContainer.style.setProperty('--columnRows', size)
    for (let i = 0; i < size*size; i++) {
        let gridCell = document.createElement('div');
        gridCell.textContent = "";
        gridCell.className = 'gridCell';
        gridCell.addEventListener('mouseover', () => {
            gridCell.className = 'gridCellHover';
        })
        gridContainer.appendChild(gridCell);
        
    }
    gridContainerParent.appendChild(gridContainer);
}

createGrid(numSelection.value);


