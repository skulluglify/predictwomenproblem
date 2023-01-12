import DecmeInstance from './index.js';

const { predictWomenProblemNext } = typeof DecmeInstance == 'function' ? DecmeInstance()?.default : DecmeInstance?.default ?? DecmeInstance;

let predict = predictWomenProblemNext(1, 1, 2023, 5, 30);

console.log(predict.next());
console.log(predict.next());

let b = predict.next();
let womenProblem = b.value;

// womenProblem.menstrStart.day
// womenProblem.menstrStart.month
// womenProblem.menstrStart.year

console.log(womenProblem.menstrStart);
console.log(womenProblem.menstrEnd);
console.log(womenProblem.preProblem);
console.log(womenProblem.problemPoint);
console.log(womenProblem.postProblem);
