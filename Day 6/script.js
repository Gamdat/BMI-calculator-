document.getElementById('bmiForm').addEventListener('submit', function(e) {
    e.preventDefault();

const age = parseInt(document.getElementById('age').value);
const height = parseFloat(document.getElementById('height').value) / 100;
const weight = parseFloat(document.getElementById('weight').value);

if (isNaN(age) || isNaN(height) || isNaN(weight)) {
    document.getElementById('result').innerHTML = "Please fill in all fields correctly.";
    return;
}

const bmi = weight / (height * height);
let status = "";

if (bmi < 18.5) {
    status = "Underweight";
    color = "blue";
} else if (bmi >= 18.5 && bmi < 25) {
    status = "Normal weight";
    color = "green";
} else if (bmi >= 25 && bmi < 30) {
    status = "Overweight";
    color = "orange";     
} else {
    status = "Obese";
    color = "red";
}

let ageNote = age < 18 ? "Note: BMI is less reliable for people under 18." : "";


document.getElementById('result').innerHTML =
`Your BMI is <strong>${bmi.toFixed(2)}</strong> - <strong>${status}</strong><br>${ageNote}`;
});

