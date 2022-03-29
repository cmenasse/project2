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

function displayProperties() {
  let html = '';
  html+= `<div class="properties">`;
  html+= 
  `<form action="/puzzles/" method="POST">
  <input type="text" placeholder="Title" name="name" required>
  <br>
  <input type="text" placeholder="Comment" name="comment">
  <br>
  <input type="number" placeholder="F1 commands"  name="cmd1" min="1" max="10">
  <br>
  <input type="number" placeholder="F2 commands"  name="cmd1" min="0" max="10">
  <br>
  <input type="number" placeholder="F3 commands"  name="cmd1" min="0" max="10">
  <br>
  <button type="submit">Submit</button>
  </form>`
  html+= `</div>`
  document.querySelector('#palette').innerHTML += html;
}

function displayTools() {
  let html = '';
  html+= `<div class="tools">`;
  html+= `<div class="color1"></div>`;
  html+= `<div class="color2"></div>`;
  html+= `<div class="color3"></div>`;
  html+= `<div class="star"></div>`;
  html+= `<div class="cursor"></div>`;
  html+= `<div class="rotate"></div>`;
  html+= `</div>`;
  document.querySelector('#palette').innerHTML += html;
}


function clickGrid(event) {
  console.log(event.target.className);
  switch (state) {
    case "tile":
      event.target.className = "tile";
      break;

    
    case "color1": case "color2": case "color3":
      if (event.target.classList.contains("star"))
       event.target.className = `${state} star`;
      else if (event.target.classList.contains("cursor"))
        event.target.className = `${state} cursor`;
      else 
        event.target.className = `${state}`;





  }


  console.log(event.target.getAttribute("data-row"))
  console.log(event.target.className);
}

function clickTools(event) {
  console.log("yay");
  console.log(event.target.getAttribute("data-row"));
}


state = "tile";

createTiles();
displayTiles();
displayProperties();
displayTools();

document.querySelector("#grid").addEventListener('click', clickGrid)
document.querySelector(".tools").addEventListener('click', clickTools)

