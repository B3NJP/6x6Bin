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

function TestBin(strIN) {
  var arrIN = strIN.split("");
  var rows = [];
  var cols = [];
  for (var i=0;i<6;i++) {cols.push([])}
  for (var i=0;i<6;i++) {
    rows.push(arrIN.slice(i*6,i*6+6));
    for (var j=0;j<6;j++) {
      cols[i].push(arrIN[j*6+i]);
      // console.log(arrIN[j*6+i])
    }
  }
  // console.log(rows.length);
  // console.log(cols);
  // console.log(arrIN);
  for (var i=0;i<rows.length;i++) {
    // console.log(i);
    if ((rows[i].join('').match(/0/g) || []).length != 3) {
      return false;
    }
    if ((cols[i].join('').match(/0/g) || []).length != 3) {
      return false;
    }
    // console.log(cols[i]);
    for (var j in rows[i].join('').split('0')) {
      if (rows[i].join('').split('0')[j].length > 2) {
        return false;
      }
    }
    for (var j in rows[i].join('').split('1')) {
      if (rows[i].join('').split('1')[j].length > 2) {
        return false;
      }
    }
    for (var j in cols[i].join('').split('0')) {
      if (cols[i].join('').split('0')[j].length > 2) {
        return false;
      }
    }
    for (var j in cols[i].join('').split('1')) {
      if (cols[i].join('').split('1')[j].length > 2) {
        return false;
      }
      // console.log(j);
      // console.log(j.length);
      // console.log(cols[i]);
      // console.log(cols[i].join('').split('1'));
    }
  }
  return true;
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
    // if (tAns == "1101110101100100010") {
    //   console.log(tAns);
    //   console.log(tStr);
    //   console.log(TestBin(tStr))
    //   break
    // }
    // if (i>1000) {break;}
    if (TestBin(tStr)) {
      for (var j=0; j<6; j++) {
        for (var k=0; k<6; k++) {
          grid[j][k].value = tStr[j*6+k];
        }
      }
      console.log(tStr)
      console.log(tAns)
      return true;
    }
  }
}

function fillDouble(tStr) {
  var tArr = [];
  for (var i in tStr) {
    tArr.push(tStr[i]);
  }
  var x = tStr.search("00");
  // console.log(tStr);
  // console.log(x);
  if (x >= 0) {
    if (x > 0) {
      tArr[x-1] = "1";
    }
    if (x < 4) {
      tArr[x+2] = "1";
    }
  }

  x = tStr.search("11");
  if (x >= 0) {
    if (x > 0) {
      tArr[x-1] = "0";
    }
    if (x < 4) {
      tArr[x+2] = "0";
    }
  }
  // console.log(tStr);
  console.log(tArr)

  return tArr.join("");
}

function fillTriple(tStr) {
  var tArr = [];
  for (var i in tStr) {
    tArr.push(tStr[i]);
  }
  var x = tStr.search("0 0");
  if (x >= 0) {
    tArr[x+1] = "1";
  }

  x = tStr.search("1 1");
  if (x >= 0) {
    tArr[x+1] = "0";
  }

  return tArr.join("");
}

function fillRows(tGrid) {
  for (var i in tGrid) {
    tS = "";
    for (var j in tGrid[i]) {
      tS += tGrid[i][j].value;
      if (tGrid[i][j].value == "") {
        tS += " ";
      }
      // console.log(tS);
    }
    // console.log(tS);
    tS2 = fillDouble(tS);
    tS3 = fillTriple(tS2);
    // console.log(tS2);
    for (var j in tGrid[i]) {
      tGrid[i][j].value = tS3[j];
    }
  }
}

function fillCols(tGrid) {
  for (var i in tGrid[0]) {
    tS = "";
    for (var j in tGrid) {
      tS += tGrid[j][i].value;
      if (tGrid[j][i].value == "") {
        tS += " ";
      }
    }
    tS2 = fillDouble(tS);
    tS3 = fillTriple(tS2);
    // console.log(tS2);
    for (var j in tGrid) {
      tGrid[j][i].value = tS3[j];
    }
  }
}

initialNumbers();

// Solve(grid);
