/*Etch-A-Sketch program*/


const LEFT_MOUSE_BUTTON = 1;
const RIGHT_MOUSE_BUTTON = 2;

function createGrid(size) {
	emptyGrid();
	const grid = document.querySelector('div.grid-container');
	for (let i = 1; i <= size; i++) {
		for (let n = 1; n <= size; n++) {
			const gridItem = document.createElement('div');
			gridItem.classList.add('grid-item');
			gridItem.addEventListener('mouseover', colorPixel);
			gridItem.addEventListener('mousedown', colorPixel);
			gridItem.style.gridRow = i;
			gridItem.style.gridColumn = n;
			grid.appendChild(gridItem);
		}
	}
}

function emptyGrid() {
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

function colorPixel(event) {
	if (event.buttons === LEFT_MOUSE_BUTTON) {
		event.target.classList.add('filled');
	}
}

function clearGrid() {
	const gridCells = document.querySelectorAll('div.grid-item');
	for (let i = 0; i < gridCells.length; i++) {
		gridCells[i].classList.remove('filled');
	}
}



//Main Program

createGrid(16);

const gridButton = document.querySelector('#grid-button');
const clearButton = document.querySelector('#clear-button');

gridButton.addEventListener('click', () => {
	let size = getSize();
	if (size) {
		createGrid(size);
	}
})

clearButton.addEventListener('click', clearGrid);