document.addEventListener(
  "DOMContentLoaded",
  () => {
    console.log("Algo-play JS imported successfully!");
  },
  false
);

function menuToggle(){
  const toggleMenu = document.querySelector('.menu')
  toggleMenu.classList.toggle('active')  
}

function displayTiles() {
  let html = '';
  for (let i = 0; i < 14; i++) {
    for (let j = 0 ; j < 12 ; j++) {
      html += `<div class="tile"></div>`;
    }
  }
  document.querySelector('#grid').innerHTML = html;
}

function displayProperties() {
  let html = '';
  html += `<div class="properties">`;
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
  html+=`</div>`
  document.querySelector('#palette').innerHTML += html;
}

function displayTools() {
  let html = '';
  html+= `<div class="tools">`;
  html+=  `<div class="color1"></div>`;
  html+=  `<div class="color2"></div>`;
  html+=  `<div class="color3"></div>`;
  html+=  `<div class="star"></div>`;
  html+=  `<div class="cursor"></div>`;
  html+=  `<div class="rotate"></div>`;
  html+= `</div>`;
  document.querySelector('#palette').innerHTML += html;
}

displayTiles();
displayProperties();
displayTools();