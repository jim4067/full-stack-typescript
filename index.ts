// const express = require('express');
import express from 'express';
import { calculateBmi } from './bmi-calculator';
import { calculate_exercises } from './exercises-calc';

const app = express();

app.use(express.json());

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

app.post('/exercicises', (req, res) => {
    //this assumes that the user knows what he is doing
    const { exercise_params } = req.body;

    const result = calculate_exercises(exercise_params);

    res.send(result);
});

const PORT = 3030;

app.listen(PORT, () => {
    console.log(`successfully running the app on port ${PORT}`);
});