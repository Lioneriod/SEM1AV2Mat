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
const plateInput1 = "AAA2045";
const plateInput2 = "BEZ2045";
const plateInput3 = "BFA2045";
const plateInput4 = "GKI2045";

function stateId(plate) {
  let plateSum = "";
  for (let i = 0; i < 3; i++) {
    let plateNumber = plateConvert[plate[i].toLowerCase()];
    plateSum += plateNumber;
  }
  if (plateSum.length == 4) {
    plateSum[3] == "";
  }
  return plateSum;
}

console.log(
  stateId(plateInput1),
  stateId(plateInput2),
  stateId(plateInput3),
  stateId(plateInput4)
);
