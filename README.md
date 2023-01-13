# Predict Women Problem (Menstruation Period)

- Continues period.
- With JavaScript, not really precious, but some relatable.
- Im men, so idk what im done yet, i write for my purpose only (helping for my friends, to do for their job).


````javascript
// nodejs only, if you are using bun.sh, check on file test.js
import { predictWomenProblemNext } from 'womenperiod';

let predict = predictWomenProblemNext('01', '01', '2023', '5', '30');

let b = predict.next();
let womenProblem = b.value;

console.log(womenProblem);
console.log(womenProblem.menstrStart.toString());

// output: console.log
// {
//   menstrStart: {
//     day: 1,
//     month: 1,
//     year: 2023,
//     toString: [Function]
//   },
//   menstrEnd: {
//     day: 5,
//     month: 1,
//     year: 2023,
//     toString: [Function]
//   },
//   preProblem: {
//     day: 12,
//     month: 1,
//     year: 2023,
//     toString: [Function]
//   },
//   problemPoint: {
//     day: 15,
//     month: 1,
//     year: 2023,
//     toString: [Function]
//   },
//   postProblem: {
//     day: 18,
//     month: 1,
//     year: 2023,
//     toString: [Function]
//   }
// }
// 2023-01-01
````

## if you feel helped, don't forget about my coffee.

[paypal.me](https://paypal.me/dark2matter)
