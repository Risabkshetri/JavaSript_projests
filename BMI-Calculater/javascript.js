const form = document.querySelector('form');
form.addEventListener('submit', function (e) {
  e.preventDefault();
  const height = parseFloat(document.querySelector('#height').value);
  const weight = parseFloat(document.querySelector('#weight').value);
  const results = document.querySelector('#results');
  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show the result
    results.innerHTML = `<span>${bmi}</span>`;
    // Display message based on BMI
  var message = document.getElementById('message');
  if (bmi < 18.5) {
    message.innerHTML = 'BMI Category: Underweight';
  } 
  else if (bmi >= 18.5 && bmi < 24.9) {
    message.innerHTML = 'BMI Category: Normal Weight';
  } 
  else if (bmi >= 25 && bmi < 29.9) {
    message.innerHTML = 'BMI Category: Overweight';
  } 
  else {
    message.innerHTML = 'BMI Category: Obese';
  }
  }
  

});


