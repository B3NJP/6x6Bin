var grid = []

for (var i=0; i<6; i++) {
  grid.push([]);
  for (var j=0; j<6; j++) {
    grid[i].push(document.getElementById(String.fromCharCode(i+65) + String(j)));
  }
}

function initialNumbers() {
  document.getElementById('A0').value = 1;   // Hard code
  document.getElementById('A1').value = "";  // Hard code
  document.getElementById('A2').value = 0;
  document.getElementById('A3').value = "";
  document.getElementById('A4').value = 0;
  document.getElementById('A5').value = 0;
  document.getElementById('B0').value = "";
  document.getElementById('B1').value = 1;
  document.getElementById('B2').value = "";
  document.getElementById('B3').value = 0;
  document.getElementById('B4').value = 0;
  document.getElementById('B5').value = "";
  document.getElementById('C0').value = "";
  document.getElementById('C1').value = "";
  document.getElementById('C2').value = "";
  document.getElementById('C3').value = "";
  document.getElementById('C4').value = "";
  document.getElementById('C5').value = 0;
  document.getElementById('D0').value = 0;
  document.getElementById('D1').value = "";
  document.getElementById('D2').value = "";
  document.getElementById('D3').value = 1;
  document.getElementById('D4').value = "";
  document.getElementById('D5').value = "";
  document.getElementById('E0').value = 1;
  document.getElementById('E1').value = 0;
  document.getElementById('E2').value = "";
  document.getElementById('E3').value = 1;
  document.getElementById('E4').value = 1;
  document.getElementById('E5').value = "";
  document.getElementById('F0').value = "";
  document.getElementById('F1').value = 0;
  document.getElementById('F2').value = "";
  document.getElementById('F3').value = "";
  document.getElementById('F4').value = 1;
  document.getElementById('F5').value = 1;
}

function Solve(tGrid) {
  tGridStr = "";
  for (var i in tGrid) {
    for (var j in tGrid[i]) {
      switch (tGrid[i][j].value) {
        case "":
          tGridStr += "2";
          break;
        default:
          tGridStr += tGrid[i][j].value;

      }
    }
  }
  console.log(tGridStr);
  tLen = (tGridStr.match(/2/g) || []).length;
  console.log(tLen)
  tStr = ""
  for (var i=0; i<Math.pow(2,tLen); i++) {
    tStr = tGridStr;
    tAns = i.toString(2);
    for (var j=0; j<tLen; j++) {
      tStr = tStr.replace("2", tAns[j] || "0");
    }
    if (tAns == "1111111111111111111") {
      console.log(tAns)
    }
  }

}

initialNumbers();

Solve(grid);
