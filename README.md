# Predict Women Problem (Menstruation Period)

- Continues period.
- With JavaScript, not really precious, but some relatable.
- Im men, so idk what im done yet, i write for my purpose only (helping for my friends, to do for their job).


````javascript
// nodejs only, if you are using bun.sh, check on file test.js
import { 
  predictWomenProblemNext, 
  createCalendarNextDataWP 
} from "womenperiod";

let predict = predictWomenProblemNext(
  '01',   //     day (begin of menstruation) 
  '01',   //   month (begin of menstruation)
  '2023', //    year (begin of menstruation)
  '5',    //  period (range of intermediate)
  '30',   //   range (range of menstruation)
  '4'     // preNext (range of next problem)
);

let b = predict.next();
let womenProblem = b.value;
console.log(womenProblem);

// output:

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
//   },
//   preMenstr: {
//     day: 27,
//     month: 1,
//     year: 2023,
//     toString: [Function]
//   },
//   menstrRange: 30
// }

// features for React users
// suitable for Calendar, CalendarStrip Element
let calendarNextDataWP = createCalendarNextDataWP(
  '01',   //     day (begin of menstruation) 
  '01',   //   month (begin of menstruation)
  '2023', //    year (begin of menstruation)
  '5',    //  period (range of intermediate)
  '30',   //   range (range of menstruation)
  '4',    // preNext (range of next problem)
  {
    customResult: (date, k) => { // optional

      const colors = [
        '#3B3B3B', // menstrStart menstrEnd
        '#FF46B4', // preProblem postProblem
        '#00FF15', // problemPoint
        '#C566EE'  // preMenstr
      ];
  
      return {
        [date]: {
          color: colors[k]
        }
      };
    }
  }
);

console.log(calendarNextDataWP.next());

// output:

// {
//   value: [
//     {
//       "2023-01-01": {
//         color: "#3B3B3B"
//       }
//     }, {
//       "2023-01-02": {
//         color: "#3B3B3B"
//       }
//     }, ...
//   ],
//   done: false
// }

// make it easy with limitations
let max = 5;
for (let cwp of calendarNextDataWP) {

  if (!max) break;

  console.log(cwp);
  max = max - 1;
}

// output:

// [
//   {
//     "2023-02-11": {
//       color: "#FF46B4"
//     }
//   }, {
//     "2023-02-12": {
//       color: "#FF46B4"
//     }
//   }, ...
// ]
// [
//   {
//     "2023-03-02": {
//       color: "#3B3B3B"
//     }
//   }, {
//     "2023-03-03": {
//       color: "#3B3B3B"
//     }
//   }, ...
// ]
// [
//   {
//     "2023-04-01": {
//       color: "#3B3B3B"
//     }
//   }, {
//     "2023-04-02": {
//       color: "#3B3B3B"
//     }
//   }, ...
// ]
// [
//   {
//     "2023-05-01": {
//       color: "#3B3B3B"
//     }
//   }, {
//     "2023-05-02": {
//       color: "#3B3B3B"
//     }
//   }, ...
// ]
// [
//   {
//     "2023-06-11": {
//       color: "#FF46B4"
//     }
//   }, {
//     "2023-06-12": {
//       color: "#FF46B4"
//     }
//   }, ...
// ]
````

## if you feel helped, don't forget about my coffee.

[paypal.me](https://paypal.me/dark2matter)
