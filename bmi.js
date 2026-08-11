function calculateBMI() {

    let weight = Number(document.getElementById("weight").value);
    let height = Number(document.getElementById("height").value);

    let bmi = weight / (height * height);

    let result;

    if (bmi < 18.5) {
        result = "Underweight";
    }
    else if (bmi < 25) {
        result = "Normal";
    }
    else if (bmi < 30) {
        result = "Overweight";
    }
    else {
        result = "Obese";
    }

    document.getElementById("result").innerHTML =
        "BMI = " + bmi.toFixed(2) + "<br>" + result;
}
