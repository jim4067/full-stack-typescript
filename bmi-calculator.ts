// interface BMI_Types {
//     body_mass: number,
//     height: number
// }

const calculateBmi = (body_mass: number, height: number) => {
    const BMI_result: number = (body_mass / (height * height)) * 703;

    if (BMI_result < 18.5) {
        // return { "bmi": `${Math.floor(BMI_result)} underweight (try eating more )` };
        return `${Math.floor(BMI_result)} underweight (try eating more )`;
        // return { "bmi": Math.floor(BMI_result), "description": "underweight (try eating more )"};
        // return console.log(Math.floor(BMI_result), "underweight (try eating more )");
    }
    if (BMI_result > 18.5 && BMI_result < 25) {
        return `${Math.floor(BMI_result)}  Normal (healthy weight)`;
        // return { "bmi": Math.floor(BMI_result), "description": "Normal (healthy weight)" };
    }
    if (BMI_result > 25 && BMI_result < 30) {
        return `${Math.floor(BMI_result)}   Overweight (try eating less)`;
        // return { "bmi": `${Math.floor(BMI_result)} Overweight (try eating less)` };
        // return console.log(BMI_result, "Overweight (try eating less)");
    }
    if (BMI_result > 30) {
        return `${Math.floor(BMI_result)}  Obese (Seariously, eat less please)`;
        // return { "bmi": `${Math.floor(BMI_result)} Obese (Seariously, eat less please)` };
        // return console.log(BMI_result, "Obese (Seariously, eat less please)");
    } else {
        return null;
    }
}


// const parseArgs = (args: Array<String>): BMI_Types => {
//     if (!isNaN(Number(args[2])) && !isNaN(Number(args[3]))) {
//         return {
//             body_mass: Number(process.argv[2]),
//             height: Number(process.argv[3])
//         }
//     } else {
//         throw new Error("values must be numbers")
//     }
// }

// // const { body_mass, height } = parseArgs(process.argv);

// // calculateBmi(body_mass, height);


export { calculateBmi };