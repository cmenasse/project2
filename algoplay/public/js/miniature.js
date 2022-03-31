function decode(container) {

  let html = '';
  let items = container.querySelector('#items').value.split(',');
  let colors = container.querySelector('#colors').value.split(',');
  let startRow = container.querySelector('#startRow').value;
  let startCol = container.querySelector('#startCol').value;
  let startDir = container.querySelector('#startDir').value * 90;
  for (let i in items) {
    for (let j in items[i]) {
      let color = (colors[i][j] == "G"? "color2": (colors[i][j] == "B"? "color3": "color1"));
      let css = items[i][j] == "#"? "inactive": (items[i][j] == "*"? color + " star": (i == startRow && j == startCol)? color + " cursor": color);
      html += `<div class="tile ${css}"></div>`;
    }
  }
  container.innerHTML = html;
  container.querySelector(".cursor").style.transform = `rotate(${startDir}deg)`;
}

document.querySelectorAll(".miniature").forEach(x => decode(x));
document.querySelectorAll(".miniature").forEach(x => console.log(x.innerHTML));
