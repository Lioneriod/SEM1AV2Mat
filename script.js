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

const plateInput1 = "OXM2045";
const plateInput2 = "ZZZ2045";
function stateId(plate) {
  function stateNamer(x, y) {
    switch (y) {
      case "statesIdAM":
        x = "Amazonas";
        console.log(`A placa é do estado do ${x}`);
        break;
      case "statesIdAC":
        x = "Acre";
        console.log(`A placa é do estado do ${x}`);
        break;
      case "statesIdRO":
        x = "Rondônia";
        console.log(`A placa é do estado de ${x}`);
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
      }
    }
  }
  // If no state is found, return this message
  console.log("Essa placa não pertence a nenhum estado da região Norte 1");
}

stateId(plateInput1);
stateId(plateInput2);
