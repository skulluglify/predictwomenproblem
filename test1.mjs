import {
  getDateRange,
  normalizeDate,
  createCalendarDataWP,
  predictWomenProblem,
  predictWomenProblemNext,
  createCalendarNextDataWP,
  zDate
} from './index.js';

let a = new zDate(1, 1, 2023);
let b = normalizeDate(0, 2, 2023);
let c = getDateRange(a, b); 

console.log(c);

let f = createCalendarDataWP(
  predictWomenProblem(
    1,
    1,
    2023,
    5,
    20,
    4
  ),
  {
    customResult: (date, k) => {

      return {
        [[
          'menstr', // k 0 
          'problem', // k 1 
          'point_problem', // k 2 
          'pre', // k 3 
        ][k]]: date
      }
    }
  }
);

console.log(f);

for (let data of f) {

  for (let key of Object.keys(data)) {

    if (key == 'menstr') {

      console.log(data[key]);
    }
  }
}

f = createCalendarNextDataWP(
  1,
  1,
  2023,
  5,
  20,
  4,
  {
    customResult: (date, k) => {

      return {
        [[
          'menstr', // k 0 
          'problem', // k 1 
          'point_problem', // k 2 
          'pre', // k 3 
        ][k]]: date
      }
    }
  }
);

f.next();
let w = f.next();

console.log(w);

for (let data of w.value) {

  for (let key of Object.keys(data)) {

    if (key == 'menstr') {

      console.log(data[key]);
    }
  }
}

const cDate = new Date();
// const cDay = cDate.getDate();
const cMonth = cDate.getMonth() + 1;
// const cYear = cDate.getFullYear();

let p = predictWomenProblemNext(
  1,
  1,
  2023,
  5,
  20,
  4
);

// for (let q of p) bikin berhenti secara menyeluruh di iterations

w = p.next();

while (w.value.menstrStart.month <= cMonth) {

  w = p.next();
}

console.log(w);