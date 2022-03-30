function menuToggle(){
  const toggleMenu = document.querySelector('.menu')
  toggleMenu.classList.toggle('active')  
}

function createTiles() {
  let html = '';
  for (let i = 0; i < 12; i++) {
    for (let j = 0; j < 14; j++) {
      html += `<div class="tile inactive" data-row="${i}" data-col="${j}"></div>`;
    }}
  document.querySelector('#grid').innerHTML = html;
}

function displayTiles() {
  document.querySelector('[data-row="5"][data-col="6"]').classList.remove("inactive");
  document.querySelector('[data-row="5"][data-col="6"]').classList.add("color1", "cursor");
  document.querySelector('[data-row="5"][data-col="7"]').classList.remove("inactive");
  document.querySelector('[data-row="5"][data-col="7"]').classList.add("color1", "star");
}

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

function toggleTile(tile)
{
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

let angle = 0;
let nbStars = 1;
let isMouseDown;
let state = "color1";
createTiles();
displayTiles();

document.querySelector("#grid").addEventListener('click', clickGrid)
document.querySelector(".tools").addEventListener('click', clickTools)

