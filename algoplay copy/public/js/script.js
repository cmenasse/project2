document.addEventListener(
  "DOMContentLoaded",
  () => {
    console.log("algoplay JS imported successfully!");
  },
  false
);

function menuToggle(){
  const toggleMenu = document.querySelector('.menu')
  toggleMenu.classList.toggle('active')  
}

function createTiles() {
  let html = '';
  for (let i = 0; i < 12; i++) {
    for (let j = 0; j < 14; j++) {
      html += `<div class="tile" data-row="${i}" data-col="${j}"></div>`;
    }}
  document.querySelector('#grid').innerHTML = html;
}

function displayTiles() {
  document.querySelector('[data-row="5"][data-col="6"]').className = "color1 cursor";
  document.querySelector('[data-row="5"][data-col="7"]').className = "color1 star";

  document.querySelector('[data-row="7"][data-col="9"]').className = "color2";
}

function toggleTile(tile)
{
  switch (state) {
    case "tile":
      if (!tile.classList.contains("cursor"))
      { 
        if (tile.classList.contains("star"))
        {
          if (nbStars == 1)
            break;
          nbStars--;
        }
        tile.className = "tile";
      }
      break;
    case "star":
      if (!tile.classList.contains('cursor') && !tile.classList.contains('tile'))
      {
        if (tile.classList.contains(state))
        {
          if (nbStars > 1)
          {
            tile.classList.remove(state);
            nbStars--;
          }
        }
        else
        {
          tile.classList.add(state);
          nbStars++;
        }
      }
      break;
    case "cursor":
      if (!tile.classList.contains('tile'))
      {
        if (tile.classList.contains("star"))
        {
          if (nbStars == 1)
            break;
          nbStars--;
          tile.classList.remove("star");
        }
        document.querySelector(".cursor").style.transform = `rotate(0deg)`;
        document.querySelector('.cursor').classList.remove('cursor');
        tile.classList.add("cursor");
        angle = 0;
      }
      break;
    case "color1": case "color2": case "color3":
      if (tile.classList.contains(state))
      {
        if (!tile.classList.contains("cursor"))
        {
          if (tile.classList.contains("star"))
          {
            if (nbStars == 1)
              break;
            nbStars--;
          }
          tile.className = "tile";
        }
      }
      else
      {
        if (tile.classList.contains("star"))
          tile.className = `${state} star`;
        else if (tile.classList.contains("cursor"))
          tile.className = `${state} cursor`;
        else 
          tile.className = `${state}`;
      }
      break;
  }
}

function clickGrid(event) {
  toggleTile(event.target);
}

function clickTools(event) {
  if (event.target.className == "rotate")
  {
    angle = (angle + 90) % 360;
    document.querySelector(".cursor").style.transform = `rotate(${angle}deg)`;
  }
  else
    state = event.target.className;
}



document.addEventListener('mousedown', function (event) {
    isMouseDown = true
})

document.addEventListener('mouseup', function (event) {
    isMouseDown = false
})

document.addEventListener('mouseover', function (event) {
    const element = event.target
    if (isMouseDown && element.classList.contains('tile')) {
      toggleTile(element)
    }
})


let angle = 0;
let nbStars = 1;
let isMouseDown;
let state = "tile";
createTiles();
displayTiles();

document.querySelector("#grid").addEventListener('click', clickGrid)
document.querySelector(".tools").addEventListener('click', clickTools)

