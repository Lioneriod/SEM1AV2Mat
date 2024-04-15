const plateConvert = {
  a: "1",
  b: "2",
  c: "3",
  d: "4",
  e: "5",
  f: "6",
  g: "7",
  h: "8",
  i: "9",
  j: "10",
  k: "11",
  l: "12",
  m: "13",
  n: "14",
  o: "15",
  p: "16",
  q: "17",
  r: "18",
  s: "19",
  t: "20",
  u: "21",
  v: "22",
  w: "23",
  x: "24",
  y: "25",
  z: "26",
};

const statesStartObj = {
  statesIdAM: {
    AM1: [
      [10, 23, 6],
      [10, 24, 25],
    ],
    AM2: [
      [14, 15, 9],
      [14, 16, 2],
    ],
    AM3: [
      [15, 1, 1],
      [15, 1, 15],
    ],
    AM4: [
      [15, 24, 13],
      [15, 24, 13],
    ],
    AM5: [
      [16, 8, 1],
      [16, 8, 26],
    ],
    AM6: [
      [17, 26, 1],
      [17, 26, 26],
    ],
  },
  statesIdAC: {
    AC1: [
      [13, 26, 14],
      [14, 1, 7],
    ],
    AC2: [
      [14, 24, 18],
      [14, 24, 20],
    ],
    AC3: [
      [15, 22, 7],
      [15, 22, 7],
    ],
    AC4: [
      [15, 24, 16],
      [15, 24, 16],
    ],
    AC5: [
      [17, 12, 21],
      [17, 12, 26],
    ],
    AC6: [
      [17, 23, 13],
      [17, 23, 17],
    ],
  },
  statesIdRO: {
    RO1: [
      [14, 2, 2],
      [14, 5, 8],
    ],
    RO2: [
      [15, 8, 12],
      [15, 8, 23],
    ],
    RO3: [
      [15, 24, 12],
      [15, 24, 12],
    ],
    RO4: [
      [17, 18, 1],
      [17, 18, 1],
    ],
    RO5: [
      [17, 20, 1],
      [17, 20, 10],
    ],
    RO6: [
      [18, 19, 21],
      [18, 19, 26],
    ],
  },
};
const svg = document.getElementById("svg-map");
norte1 = svg.querySelectorAll(".norte1");
const plateClickAM = svg.getElementById("amazonas");
plateClickAM.addEventListener("click", () => {
  document.querySelector("#result").innerHTML =
    "Você selecionou o estado do Amazonas";
  document.querySelector("#resultNumbers").innerHTML =
    "Esse estado possui as seguintes placas:";
  document.querySelector("#plateList").innerHTML =
    "JWF a JXY<br>NOI a NPB<br>OAA a OAO<br>OXM<br>PHA a PHZ<br>QZA a QZZ";
});
const plateClickAC = svg.getElementById("acre");
plateClickAC.addEventListener("click", () => {
  document.querySelector("#result").innerHTML =
    "Você selecionou o estado do Acre";
  document.querySelector("#resultNumbers").innerHTML =
    "Esse estado possui as seguintes placas:";
  document.querySelector("#plateList").innerHTML =
    "MZN a NAG<br>NXR a NXT<br>OVG<br>OXP<br>QLU a QLZ<br>QWM a QWQ";
});
const plateClickRO = svg.getElementById("rondonia");
plateClickRO.addEventListener("click", () => {
  document.querySelector("#result").innerHTML =
    "Você selecionou o estado de Rondônia";
  document.querySelector("#resultNumbers").innerHTML =
    "Esse estado possui as seguintes placas:";
  document.querySelector("#plateList").innerHTML =
    "NBB a NEH<br>OHL a OHW<br>OXL<br>QRA<br>QTA a QTJ<br>RSU a RSZ";
});

const inputActivate = document.getElementById("activate");
inputActivate.addEventListener("click", () => {
  const input = document.getElementById("plateInput").value;
  function stateId(plate) {
    var index = 0,
      length = norte1.length;
    for (; index < length; index++) {
      norte1[index].style.fill = "#03a2ec";
    }
    document.querySelector("#resultNumbers").innerHTML = "";
    document.querySelector("#plateList").innerHTML = "";
    function stateNamer(x, y) {
      switch (y) {
        case "statesIdAM":
          x = "Amazonas";
          const stateStyleAM = svg.getElementById("amazonas");
          document.querySelector("#result").innerHTML =
            "O estado dessa placa é " + x;
          document.querySelector("#resultNumbers").innerHTML =
            "Esse estado possui as seguintes placas:";
          document.querySelector("#plateList").innerHTML =
            "JWF a JXY<br>NOI a NPB<br>OAA a OAO<br>OXM<br>PHA a PHZ<br>QZA a QZZ";
          stateStyleAM.style.fill = "#ec6c03";
          break;
        case "statesIdAC":
          x = "Acre";
          const stateStyleAC = svg.getElementById("acre");
          document.querySelector("#result").innerHTML =
            "O estado dessa placa é " + x;
          document.querySelector("#resultNumbers").innerHTML =
            "Esse estado possui as seguintes placas:";
          document.querySelector("#plateList").innerHTML =
            "MZN a NAG<br>NXR a NXT<br>OVG<br>OXP<br>QLU a QLZ<br>QWM a QWQ";
          stateStyleAC.style.fill = "#ec6c03";
          break;
        case "statesIdRO":
          x = "Rondônia";
          const stateStyleRO = svg.getElementById("rondonia");
          document.querySelector("#result").innerHTML =
            "O estado dessa placa é " + x;
          document.querySelector("#resultNumbers").innerHTML =
            "Esse estado possui as seguintes placas:";
          document.querySelector("#plateList").innerHTML =
            "NBB a NEH<br>OHL a OHW<br>OXL<br>QRA<br>QTA a QTJ<br>RSU a RSZ";
          stateStyleRO.style.fill = "#ec6c03";
          break;
      }
    }
    let plateSum = [];
    let plateCut = plate.slice(0, 3);
    for (let i = 0; i < 3; i++) {
      let plateNumber = plateConvert[plateCut[i].toLowerCase()];
      plateSum.push(plateNumber);
    }
    plateSumNum = plateSum.map(Number);
    for (const stateStartKey in statesStartObj) {
      let stateName = "";
      const stateObj = statesStartObj[stateStartKey];
      for (const stateKey in stateObj) {
        if (plateSumNum[0] == stateObj[stateKey][0][0]) {
          //stateStartKey = The key for the state object
          //stateKey = The key containing the fist number that matched with the plate
          if (plateSumNum.toString() == stateObj[stateKey][0].toString()) {
            return stateNamer(stateName, stateStartKey);
          } else if (
            plateSumNum[0] >= stateObj[stateKey][0][0] &&
            plateSumNum[0] <= stateObj[stateKey][1][0]
          ) {
            if (
              plateSumNum[1] >= stateObj[stateKey][0][1] &&
              plateSumNum[1] <= stateObj[stateKey][1][1]
            ) {
              if (
                plateSumNum[2] >= stateObj[stateKey][0][2] &&
                plateSumNum[2] <= stateObj[stateKey][1][2]
              ) {
                return stateNamer(stateName, stateStartKey);
              }
            }
          }
        } else if (plateSumNum[0] > stateObj[stateKey][0][0]) {
          if (plateSumNum.toString() == stateObj[stateKey][0].toString()) {
            return stateNamer(stateName, stateStartKey);
          } else if (
            plateSumNum[0] >= stateObj[stateKey][0][0] &&
            plateSumNum[0] <= stateObj[stateKey][1][0]
          ) {
            if (
              plateSumNum[1] >= stateObj[stateKey][1][1] &&
              plateSumNum[1] <= stateObj[stateKey][0][1]
            ) {
              if (
                (plateSumNum[2] >= 1 &&
                  plateSumNum[2] <= stateObj[stateKey][1][2]) ||
                (plateSumNum[2] <= 26 &&
                  plateSumNum[2] >= stateObj[stateKey][0][2])
              ) {
                console.log(plateSumNum);
                return stateNamer(stateName, stateStartKey);
              }
            }
          }
        }
        // If no state is found, return this message
        document.querySelector("#result").innerHTML =
          "Nenhum que exista na região Norte 1";
      }
    }
  }
  function plateTester(plate) {
    let tester = 0;
    for (let i = 0; i < 7; i++) {
      if (i < 3 || i === 4) {
        if (plate[i] == plate[i].toString()) {
          tester++;
        }
      } else {
        if (plate[i] == parseInt(plate[i])) {
          tester++;
        }
      }
    }
    return tester;
  }
  if (plateTester(input)) {
    stateId(input);
  } else {
    document.querySelector("#result").innerHTML =
      "Essa placa não está no formato Mercosul, portanto não pôde ser lida";
  }
});
