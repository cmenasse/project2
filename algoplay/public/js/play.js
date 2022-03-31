function decode() {

    let html = '';
    let items = document.getElementById('items').value.split(',');
    let colors = document.getElementById('colors').value.split(',');
    let startRow = document.getElementById('startRow').value;
    let startCol = document.getElementById('startCol').value;
    let startDir = document.getElementById('startDir').value * 90;
    for (let i in items) {
      for (let j in items[i]) {
        let color = (colors[i][j] == "G"? "color2": (colors[i][j] == "B"? "color3": "color1"));
        let css = items[i][j] == "#"? "inactive": (items[i][j] == "*"? color + " star": (i == startRow && j == startCol)? color + " cursor": color);
        html += `<div class="tile ${css}"></div>`;
      }
    }
    document.querySelector('#grid').innerHTML = html;
    document.querySelector(".cursor").style.transform = `rotate(${startDir}deg)`;

}

decode();