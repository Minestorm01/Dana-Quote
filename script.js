document.addEventListener('DOMContentLoaded', (event) => {
  document.getElementById('calculate').addEventListener('click', calculateQuote);
});

const letterToNumberMap = {
  c: 1, a: 2, r: 3, b: 4, o: 5, n: 6, i: 7, t: 8, e: 9, s: 0
};

function calculateQuote() {
  const firstLetterInput = document.getElementById('firstLetter').value.toLowerCase();
  const secondLetterInput = document.getElementById('secondLetter').value.toLowerCase();
  
  // Check if the letters are in the map
  if(!(firstLetterInput in letterToNumberMap && secondLetterInput in letterToNumberMap)) {
    alert("Please enter valid letters from 'carbonites'.");
    return;
  }

  const firstNumber = letterToNumberMap[firstLetterInput];
  const secondNumber = letterToNumberMap[secondLetterInput];
  const outputNumber = (firstNumber.toString() + secondNumber.toString()) * 2.5;
  
  document.getElementById('output').textContent = outputNumber.toFixed(2);
}
