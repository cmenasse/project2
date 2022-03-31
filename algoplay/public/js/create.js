let maxHeight = 12;
let maxWidth = 16;
let angle = 0;
let nbStars = 1;
let isMouseDown;
let state = "color1";

// Init 

function createTiles() {
  let html = '';
  for (let i = 0; i <  maxHeight * maxWidth; i++) {
    html += `<div class="tile inactive"></div>`;
  document.querySelector('#grid').innerHTML = html;
  }
}

function displayTiles() {
  let tiles = document.getElementById('grid').children;
  let idx = ((maxHeight / 2) - 1) * maxWidth + (maxWidth / 2 - 1);
  cursor = tiles[idx];
  star = tiles[idx + 1];
  cursor.classList.remove("inactive");
  cursor.classList.add("color1", "cursor");
  star.classList.remove("inactive");
  star.classList.add("color1", "star");
}

createTiles();
displayTiles();


// Functions

function dropStar(tile) {
  if (tile.classList.contains("star") && nbStars > 1) {
    tile.classList.remove("star");
    nbStars--;
  }
}

function dropTile(tile) {
  if (!(tile.classList.contains("cursor") || (tile.classList.contains("star") && nbStars == 1))) { 
    dropStar(tile);
    tile.classList.remove("color1", "color2", "color3");
    tile.classList.add("inactive");
  }
}

function starCase(tile) {
  if (!tile.classList.contains("cursor") && !tile.classList.contains("inactive")) {
    if (tile.classList.contains(state)) {
      dropStar(tile);
    }
    else {
      tile.classList.add(state);
      nbStars++;
    }
  }
}

function cursorCase(tile) {
  if (!tile.classList.contains("inactive")) {
    dropStar(tile);
    if (!tile.classList.contains("star") || nbStars > 1) {
      document.querySelector(".cursor").style.transform = `rotate(0deg)`;
      document.querySelector(".cursor").classList.remove(state);
      tile.classList.add(state);
      angle = 0;
    }
  }
}

function colorCase(tile) {
  if (tile.classList.contains(state)) {
    dropTile(tile);
  }
  else {
    tile.classList.remove("inactive", "color1", "color2", "color3");
    tile.classList.add(state);
  }
}

function toggleTile(tile) {
  switch (state) {
    case "star":
      starCase(tile);
      break;
    case "cursor":
      cursorCase(tile);
      break;
    case "color1": case "color2": case "color3":
      colorCase(tile);
      break;
  }
}

function clickGrid(event) {
  toggleTile(event.target);
}

function clickTools(event) {
  if (event.target.className == "rotate") {
    angle = (angle + 90) % 360;
    document.querySelector(".cursor").style.transform = `rotate(${angle}deg)`;
  }
  else {
    state = event.target.className;
  }
}

function encode() {
  let startRow = 0;
  let startCol = 0;
  let itemsMap = [];
  let colorsMap = [];
  let tiles = document.getElementById('grid').children;
  for (let i = 0; i <  maxHeight; i++) {
    let colorsRow = "";
    let itemsRow =  "";
    for (let j = 0; j <  maxWidth; j++) {
      let tile = tiles[i * maxWidth + j];
      colorsRow += tile.classList.contains("color2")?"G":(tile.classList.contains("color3")?"B":"R");
      itemsRow += tile.classList.contains("inactive")?"#":(tile.classList.contains("star")?"*":".");
      if (tile.classList.contains("cursor")) {
        startRow = i;
        startCol = j;
      }
    }
    itemsMap.push(itemsRow);
    colorsMap.push(colorsRow);
  }
  return ([colorsMap, itemsMap, startRow, startCol, angle / 90]);
} 

function handleSubmit() {
  const [colorsMap, itemsMap, startRow, startCol, startDir] = encode();
  document.getElementById('colors').value = colorsMap;
  document.getElementById('items').value = itemsMap;
  document.getElementById('startRow').value = startRow;
  document.getElementById('startCol').value = startCol;
  document.getElementById('startDir').value = startDir;
}

// EventListeners

document.addEventListener('mousedown', function (event) {
  isMouseDown = true;
})

document.addEventListener('mouseup', function (event) {
  isMouseDown = false;
})

document.addEventListener('mouseover', function (event) {
  if (isMouseDown && event.target.classList.contains('tile')) {
    toggleTile(event.target);
  }
})

document.querySelector("#grid").addEventListener('click', clickGrid);
document.querySelector(".tools").addEventListener('click', clickTools);
document.querySelector("form").addEventListener('submit', handleSubmit);

