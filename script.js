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

const statesStartAM = {
  AM1: [10, 23, 6],
  AM2: [14, 15, 9],
  AM3: [15, 1, 1],
  AM4: [15, 24, 13],
  AM5: [16, 8, 1],
  AM6: [17, 26, 1],
};

const statesEndAM = {
  AM1: [10, 24, 25],
  AM2: [14, 16, 2],
  AM3: [15, 1, 15],
  AM5: [16, 8, 26],
  AM6: [17, 26, 26],
};

const plateInput1 = "JWF2045";
const plateInput2 = "BEZ2045";
const plateInput3 = "BFA2045";
const plateInput4 = "GKI2045";

function stateId(plate) {
  let plateSum = [];
  for (let i = 0; i < 3; i++) {
    let plateNumber = plateConvert[plate[i].toLowerCase()];
    plateSum.push(plateNumber);
  }
  plateSumNum = plateSum.map(Number);
  for (const statesStartAMKey of Object.keys(statesStartAM)) {
    if (plateSumNum[0] === statesStartAM[statesStartAMKey][0]) {
      matchedKey = statesStartAMKey; // Store the matched key
      console.log(`The first element of ${statesStartAMKey} matches.`);
      // Do something if the condition is met
    }
    console.log("Matched key:", matchedKey);
  }
}

console.log(
  stateId(plateInput1),
  stateId(plateInput2),
  stateId(plateInput3),
  stateId(plateInput4)
);
