/* This code will generate all possibilities of plates, 
creating an array ranging from "AAA" to "ZZZ"*/
function plateGenerator() {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const plates = [];
  for (let i = 0; i < letters.length; i++) {
    for (let j = 0; j < letters.length; j++) {
      for (let k = 0; k < letters.length; k++) {
        plates.push(letters[i] + letters[j] + letters[k]);
      }
    }
  }
  return plates;
}

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
function stateId(plate) {
  function stateNamer(x, y) {
    switch (y) {
      case "statesIdAM":
        x = "Amazonas";
        return "O estado dessa placa é " + x;
      case "statesIdAC":
        x = "Acre";
        return "O estado dessa placa é " + x;
      case "statesIdRO":
        x = "Rondônia";
        return "O estado dessa placa é " + x;
    }
  }
  let plateSum = [];
  let plateCut = plate.slice(0, 3);
  for (let i = 0; i < 3; i++) {
    let plateNumber = plateConvert[plateCut[i].toLowerCase()];
    plateSum.push(plateNumber);
  }
  let plateSumNum = plateSum.map(Number);
  for (const stateStartKey in statesStartObj) {
    let stateName = "";
    const stateObj = statesStartObj[stateStartKey];
    for (const stateKey in stateObj) {
      if (
        plateSumNum.toString() == stateObj[stateKey][0].toString() ||
        plateSumNum.toString() == stateObj[stateKey][1].toString()
      ) {
        return stateNamer(stateName, stateStartKey);
      } else if (
        stateObj[stateKey][0][0] !== stateObj[stateKey][1][0] &&
        plateSumNum[0] == stateObj[stateKey][1][0]
      ) {
        if (
          plateSumNum[1] <= stateObj[stateKey][1][1] &&
          plateSumNum[2] <= stateObj[stateKey][1][2]
        ) {
          return stateNamer(stateName, stateStartKey);
        }
      } else if (
        stateObj[stateKey][0][0] !== stateObj[stateKey][1][0] &&
        plateSumNum[0] == stateObj[stateKey][0][0]
      ) {
        if (
          plateSumNum[1] >= stateObj[stateKey][0][1] &&
          plateSumNum[2] >= stateObj[stateKey][0][2]
        ) {
          return stateNamer(stateName, stateStartKey);
        }
      } else if (
        plateSumNum[0] >= stateObj[stateKey][0][0] &&
        plateSumNum[1] >= stateObj[stateKey][0][1]
      ) {
        if (
          plateSumNum[2] >= stateObj[stateKey][0][2] &&
          stateObj[stateKey][0][2] < stateObj[stateKey][1][2]
        ) {
          if (
            plateSumNum[0] <= stateObj[stateKey][1][0] &&
            plateSumNum[1] <= stateObj[stateKey][1][1] &&
            plateSumNum[2] <= stateObj[stateKey][1][2]
          ) {
            return stateNamer(stateName, stateStartKey);
          }
        } else if (
          plateSumNum[2] <= stateObj[stateKey][0][2] &&
          stateObj[stateKey][0][2] > stateObj[stateKey][1][2]
        ) {
          if (
            plateSumNum[0] <= stateObj[stateKey][1][0] &&
            plateSumNum[1] <= stateObj[stateKey][1][1] &&
            plateSumNum[2] <= stateObj[stateKey][1][2]
          ) {
            return stateNamer(stateName, stateStartKey);
          }
        }
      }
    }
  }
}

let plateCounter = {
  platesAM: 0,
  platesAC: 0,
  platesRO: 0,
  bosta: 0,
};

for (let i = 0; i < plateGenerator().length; i++) {
  let x = stateId(plateGenerator()[i]);
  if (x === "O estado dessa placa é Amazonas") {
    console.log(plateGenerator()[i] + " <- Amazonas");
    plateCounter["platesAM"]++;
  } else if (x === "O estado dessa placa é Acre") {
    console.log(plateGenerator()[i] + " <- Acre");
    plateCounter["platesAC"]++;
  } else if (x === "O estado dessa placa é Rondônia") {
    console.log(plateGenerator()[i] + " <- Rondônia");
    plateCounter["platesRO"]++;
  } else {
    console.log(plateGenerator()[i] + " <- outros");
    plateCounter["outros"]++;
  }
}

if (
  plateCounter["platesAM"] == 109 &&
  plateCounter["platesAC"] == 32 &&
  plateCounter["platesRO"] == 111
) {
  console.log("WE DID IT");
} else {
  console.log("Está faltando:");
  console.log(109 - plateCounter["platesAM"] + " placas do Amazonas");
  console.log(32 - plateCounter["platesAC"] + " placas do Acre");
  console.log(111 - plateCounter["platesAM"] + " placas de Rondônia");
}
