interface Result {
    period_length: number,
    training_days: number,
    target_hours: number, //hours that he targetted to train
    average_time: number,
    isAchieved: boolean
    rating: number,
    rating_explained: string
}

const exercise_days: Array<number> = [];

// calculate_exercises([3, 0, 2, 4.5, 0, 3, 1]);
const calculate_exercises = (param: Array<string | number>): Result => {

    //get hours for the days the person worked out
    //the array listing starts at two because one  is reserved for the target.
    for (let index = 1; index <= param.length; index++) {
        if (!isNaN(Number(param[index]))) {
            exercise_days.push(Number(param[index]));
        }

    }

    const period_length = exercise_days.length;

    //get the days he trained. days with zero
    const training_days = exercise_days.filter((days) => days !== 0).length;

    const target_hours = Number(param[1]);

    const average_time = exercise_days.reduce((acc, curVal) => acc + curVal) / period_length;

    const isAchieved = average_time >= target_hours;

    const rating = (average_time > target_hours) ? 3 : (average_time > target_hours - 1) ? 2 : 1;

    const rating_explained = (rating === 3) ? "goo job chap" : (rating === 2) ? "nice, but could use improvement" : "Try harder";

    return {
        period_length,
        training_days,
        target_hours,
        average_time,
        isAchieved,
        rating,
        rating_explained
    };
};

export { calculate_exercises };
// console.log(calculate_exercises());

//@jim4067
// A function  that calculates the average time of daily exercise hours
// and compares it to the target amount of daily hours and returns 
// an object that includes the following values:

// the number of days
// the number of training days
// the original target value
// the calculated average time
// boolean value describing if the target was reached
// a rating between the numbers 1-3 that tells how well the hours are met. You can decide on the metric on your own.
// a text value explaining the rating