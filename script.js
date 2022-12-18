/*Etch-A-Sketch program*/


function createGrid(size) {
	clearGrid();
	const grid = document.querySelector('div.grid-container');
	for (let i = 1; i <= size; i++) {
		for (let n = 1; n <= size; n++) {
			const gridItem = document.createElement('div');
			gridItem.classList.add('grid-item');
			gridItem.style.gridRow = i;
			gridItem.style.gridColumn = n;
			grid.appendChild(gridItem);
		}
	}
}

function clearGrid() {
	const grid = document.querySelector('div.grid-container');
	let child = grid.lastElementChild;
	while (child) {
		grid.removeChild(child);
		child = grid.lastElementChild;
	}
}

function getSize() {
	const sizeBox = document.querySelector('#grid-size-txt');
	let size = Number(sizeBox.value);
	sizeBox.value = '';
	return size;
}



//Main Program

createGrid(16);

const gridButton = document.querySelector('#grid-button');
const clearButton = document.querySelector('#clear-button');

gridButton.addEventListener('click', () => {
	console.log('clicked');
	let size = getSize();
	console.log(size);
	if (size) {
		createGrid(size);
	}
})

clearButton.addEventListener('click', () => console.log('cleared'));