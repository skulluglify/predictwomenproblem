import {
  getDateRange,
  normalizeDate,
  zDate
} from './index.js';

let a = new zDate(1, 1, 2023);
let b = normalizeDate(0, 2, 2023);
let c = getDateRange(a, b);

console.log(c);