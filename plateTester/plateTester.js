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

const plateList = plateGenerator();
console.log(plateList);
