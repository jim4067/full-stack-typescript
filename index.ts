const express = require('express');
import { calculateBmi } from './bmi-calculator';

const app = express();

app.get('/hello', (req, res) => {
    res.send("Hello full stack");

    console.log(req.query);
});

app.get('/bmi', (req, res) => {
    //NOTE
    //using query strings -> they begin after the question mark and can be combined using & symbol
    const { weight, height } = req.query;

    const bmi = calculateBmi(Number(weight), Number(height));

    res.json({ height, weight, "bmi": bmi });
});

const PORT = 3030;

app.listen(PORT, () => {
    console.log(`successfully running the app on port ${PORT}`);
});