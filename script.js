const letterToNumber = {
  'c': 1, 'a': 2, 'r': 3, 'b': 4,
  'o': 5, 'n': 6, 'i': 7, 't': 8,
  'e': 9, 's': 0
};

function calculate() {
  let letter1 = document.getElementById('letter1').value.toLowerCase();
  let letter2 = document.getElementById('letter2').value.toLowerCase();
  
  let num1 = letterToNumber[letter1] || 0;
  let num2 = letterToNumber[letter2] || 0;
  
  let result = `The calculated amount is: ${((num1 * 10 + num2) * 2.5).toFixed(2)}`;
  document.getElementById('result').innerText = result;
}

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js').catch(err => console.log('Service Worker registration failed:', err));
  });
}
