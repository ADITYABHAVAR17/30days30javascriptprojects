document.addEventListener("DOMContentLoaded", function() {
  const weightInput = document.querySelector('#weight');
  const heightInput = document.querySelector('#height');
  const calculateButton = document.querySelector('#calculate');
  const resetButton = document.querySelector('#reset');
  const bmiDisplay = document.querySelector('#bmi');
  const statusDisplay = document.querySelector('#status');
  const display = document.querySelector('.display');

  calculateButton.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    const weight = parseFloat(weightInput.value);
    const heightCm = parseFloat(heightInput.value);
    const heightM = heightCm / 100; // Convert height to meters

    if (isNaN(weight) || isNaN(heightM) || weight <= 0 || heightM <= 0) {
      alert("Please enter valid positive numbers for weight and height.");
      return;
    }

    const bmiValue = (weight / (heightM * heightM)).toFixed(1);
    bmiDisplay.textContent = bmiValue;
    display.style.display = 'block';
    if (bmiValue < 18.5) {
      statusDisplay.textContent = 'Underweight';
      // display.style.display = 'block';
    } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
      statusDisplay.textContent = 'Normal';
    } else if (bmiValue >= 25 && bmiValue <= 29.9) {
      statusDisplay.textContent = 'Overweight';
    } else {

      statusDisplay.textContent = 'Obese';
    }
  });

  resetButton.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the form from submitting
    display.style.display = 'none';
    weightInput.value = '';
    heightInput.value = '';
    bmiDisplay.textContent = '';
    statusDisplay.textContent = '';
  });
});
