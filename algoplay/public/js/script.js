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


function clickGrid(event) {
  switch (state) {
    case "tile":
      if (!event.target.classList.contains("cursor"))
      { 
        if (event.target.classList.contains("star"))
        {
          if (nbStars == 1)
            break;
          nbStars--;
        }
        event.target.className = "tile";
      }
      break;
    case "star":
      if (!event.target.classList.contains('cursor') && !event.target.classList.contains('tile'))
      {
        event.target.classList.add(state);
        nbStars++;
      }
      break;
    case "cursor":
      if (!event.target.classList.contains('tile'))
      {
        if (event.target.classList.contains("star"))
        {
          if (nbStars == 1)
            break;
          nbStars--;
          event.target.classList.remove("star");
        }
        document.querySelector('.cursor').classList.remove('cursor');
        event.target.classList.add("cursor");
      }
      break;
    case "color1": case "color2": case "color3":
      if (event.target.classList.contains(state))
      {
        if (!event.target.classList.contains("cursor"))
          event.target.className = "tile";
      }
      else
      {
        if (event.target.classList.contains("star"))
        event.target.className = `${state} star`;
        else if (event.target.classList.contains("cursor"))
          event.target.className = `${state} cursor`;
        else 
          event.target.className = `${state}`;
      }
      break;
  }
}

function clickTools(event) {
  state = event.target.className;
}

state = "tile";
nbStars = 1;
createTiles();
displayTiles();

document.querySelector("#grid").addEventListener('click', clickGrid)
document.querySelector(".tools").addEventListener('click', clickTools)

