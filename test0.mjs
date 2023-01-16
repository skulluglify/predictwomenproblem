import { 
  predictWomenProblemNext, 
  createCalendarNextDataWP 
} from "./index.js";

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

// make it easy with limitations
let max = 12;
for (let cwp of calendarNextDataWP) {

  if (!max) break;

  console.log(cwp);
  max = max - 1;
}