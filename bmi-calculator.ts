const calculateBmi = (body_mass: number, height: number) => {
    const BMI_result: number = (body_mass / (height * height)) * 703;

    if (BMI_result < 18.5) {
        return console.log(Math.floor(BMI_result), "underweight (try eating more )");
    }
    if (BMI_result > 18.5 && BMI_result < 25) {
        return console.log(Math.floor(BMI_result), "Normal (healthy weight)");
    }
    if (BMI_result > 25 && BMI_result < 30) {
        return console.log(BMI_result, "Overweight (try eating less)");
    }
    if (BMI_result > 30) {
        return console.log(BMI_result, "Obese (Seariously, eat less please)");
    }
}

calculateBmi(180, 74);