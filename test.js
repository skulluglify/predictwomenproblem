import DecmeInstance from './index.js';

const { predictWomenProblemNext } = typeof DecmeInstance == 'function' ? DecmeInstance()?.default : DecmeInstance?.default ?? DecmeInstance;

let predict = predictWomenProblemNext('01', '01', '2023', '5', '30');

let b = predict.next();
let womenProblem = b.value;

console.log(womenProblem);
console.log(womenProblem.menstrStart.toString());
