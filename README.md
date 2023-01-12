# Predict Women Problem (Menstruation Period)

- Continues period.
- With JavaScript, not really precious, but some relatable.
- Im men, so idk what im done yet, i write for my purpose only (helping for my friends, to do for their job).


````javascript
// fix nodejs & bun.sh

import DecmeInstance from './index.js';

// sorry for this, complicated stuff, bcs i use two methods, nodejs & bun.sh
const {
  WomenProblem, // struct<{ menstrStart, menstrEnd, preProblem, problemPoint, postProblem }>
  getRangeMonth, // month, year -> 28 | 29 | 30 | 31
  normalizeDate, // start|day, month, year -> zDate
  predictWomenProblem, // start|day, month, year, period, range -> WomenProblem
  predictWomenProblemNext, // start|day, month, year, period, range -> Next<WomenProblem>
  zDate // day, month, year
} = typeof DecmeInstance == 'function' ? DecmeInstance()?.default : DecmeInstance?.default ?? DecmeInstance;

// !! caution
// if you are use only nodejs, you can try it for yourself
import { predictWomenProblemNext } from './index.js';

// predictWomenProblemNext()
let predict = predictWomenProblemNext(1, 1, 2023, 5, 30);

console.log(predict.next());
console.log(predict.next());

let b = predict.next();
let womenProblem = b.value;

// output: b
{
  value: {
    menstrStart: {
      day: 1,
      month: 1,
      year: 2023
    },
    menstrEnd: {
      day: 5,
      month: 1,
      year: 2023
    },
    preProblem: {
      day: 12,
      month: 1,
      year: 2023
    },
    problemPoint: {
      day: 15,
      month: 1,
      year: 2023
    },
    postProblem: {
      day: 18,
      month: 1,
      year: 2023
    }
  },
  done: false
}
````

## if you feel helped, don't forget about my coffee.

[paypal.me](https://paypal.me/dark2matter)
