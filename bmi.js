        function calculateBMI() {

            let weight = document.getElementById("weight").value;
            let height = document.getElementById("height").value;

            if (weight === "" || height === "") {

                document.getElementById("result").innerHTML =
                    "Please enter both values.";

                return;
            }

            // Convert height from cm to metres
            height = height / 100;

            // BMI formula
            let bmi = weight / (height * height);

            document.getElementById("result").innerHTML =
                "Your BMI is: " + bmi.toFixed(2);
        }

