// !! caution, polyfill

if (!String.prototype.hasOwnProperty('padStart')) {

  String.prototype.padStart = function padStart(maxLength, fillString = ' ') {

    let context = this.toString();

    maxLength = maxLength - context.length;

    while (0 < maxLength) {

      context = fillString + context;
      maxLength = maxLength - 1;
    }

    return context;
  }
}

if (!String.prototype.hasOwnProperty('padEnd')) {

  String.prototype.padEnd = function padEnd(maxLength, fillString = ' ') {

    let context = this.toString();

    maxLength = maxLength - context.length;

    while (0 < maxLength) {

      context = context + fillString;
      maxLength = maxLength - 1;
    }

    return context;
  }
}

// !!

const cDate = new Date();
const cDay = cDate.getDate();
const cMonth = cDate.getMonth() + 1;
const cYear = cDate.getFullYear();

export function getDaysInMonth(month, year = cYear) {

  if (month === 1) return 31;
  if (month === 2) return year % 4 ? 28 : (year % 400 && !(year % 100) ? 28 : 29);
  if (month <= 12) return ((month - 3) % 5) & 1 ? 30 : 31;
  
  // confused by default
  return 30;
}

export class zDate {

  day = 1;
  month = 1;
  year = 1900;

  constructor (day, month, year) {

    Object.defineProperty(this, 'day', {
      value: day,
      enumerable: true,
      configurable: false,
      writable: false
    });

    Object.defineProperty(this, 'month', {
      value: month,
      enumerable: true,
      configurable: false,
      writable: false
    });

    Object.defineProperty(this, 'year', {
      value: year,
      enumerable: true,
      configurable: false,
      writable: false
    });

    Object.defineProperty(this, 'toString', {
      value: () => {

        let day = this?.day ?? 1;
        let month = this?.month ?? 1;
        let year = this?.year ?? 1900;
    
        return year.toString().padStart(4, '0') + '-' + month.toString().padStart(2, '0') + '-' + day.toString().padStart(2, '0');
      },
      enumerable: false,
      configurable: false,
      writable: false
    })
  }
}

export function normalizeDate(day, month, year) {

  // 0 < day or day < 0
  // 0 < month
  // 0 < year

  // less year
  if (year <= 0) {

    return new zDate(0, 0, 0);
  }

  // more year
  // is infinity boiii

  // less month
  if (month <= 0) {

    while (true) {

      year = year - 1;

      if (year == 0) {

        return new zDate(0, 0, 0);
      }

      // month = 12 + 0
      // month = 12 + (-n)
      month = month <= 0 ? 12 + month : month;
      // case if month equal than zero
      // month = month == 0 ? 12 : month;

      if (0 < month) break;
    }
  }

  // more month
  if (12 < month) {

    while (true) {

      month = month - 12;
      year = year + 1;

      if (month <= 12) break;
    }
  }

  // less days
  if (day <= 0) {

    while (true) {

      month = month - 1;

      if (month == 0) {

        year = year - 1;
        month = 12;
      }

      if (year == 0) {

        // like null
        return new zDate(0, 0, 0);
        // return null;
      }

      let days = getDaysInMonth(month, year);

      // day = days + 0
      // day = days + (-n)
      day = day <= 0 ? days + day : day;
      // case if day calc equal then zero
      // day = day == 0 ? days : day;

      if (0 < day) break;
    }
  }

  // more days
  while (true) {

    let days = getDaysInMonth(month, year);

    if (days < day) {

      if (month == 12) {

        day = day - days;
        year = year + 1;
        month = 1;
        continue;
      }

      day = day - days;
      month = month + 1;
      continue;
    }

    return new zDate(day, month, year);
  }
}

export function autoParseInt(...args) {

  let t = [];

  for (let v of args) {

    if (['string', 'number'].includes(typeof v)) {

      t.push(typeof v === 'string' ? Number.parseInt(v) : v);
      continue;
    }
  }

  return t;
}

// sep DAY MONTH YEAR

// all params, zDate
export function compareDate(a, b) {

  return a.day == b.day
  && a.month == b.month
  && a.year == b.year;
}

// sep DAY MONTH YEAR

// all params, zDate
export function getDateRange(a, b) {

  if (compareDate(a, b)) return [a];

  // a < b
  // !! problem, day, month, year
  if (b.day < a.day && b.month < a.month && b.year < a.year) {

    // swap
    let c = b;
    b = a;
    a = c;

  }

  let i = 1;
  let t = [a];

  while (true) {

    let c = normalizeDate(a.day + i, a.month, a.year);
    t.push(c); // type

    if (compareDate(c, b)) break;
    
    i = i + 1;
  }

  return t;
}

// more features for manipulation date

// !! women ~~

export class WomenProblem {

  menstrStart = new zDate(1, 1, 1900);
  menstrEnd = new zDate(1, 1, 1900);
  preProblem = new zDate(1, 1, 1900);
  problemPoint = new zDate(1, 1, 1900);
  postProblem = new zDate(1, 1, 1900);
  preMenstr = new zDate(1, 1, 1900);

  menstrRange = 0;

  constructor(menstrStart, menstrEnd, preProblem, problemPoint, postProblem, preMenstr, menstrRange) {

    this.menstrStart = menstrStart;
    this.menstrEnd = menstrEnd;
    this.preProblem = preProblem;
    this.problemPoint = problemPoint;
    this.postProblem = postProblem;
    this.preMenstr = preMenstr;
    this.menstrRange = menstrRange;
  }
}

// all params, require positive numbers
export function predictWomenProblem(start, month, year, period, range, preNext = 4) {

  // auto parsing integer
  [ start, month, year, period, range, preNext ] = autoParseInt(start, month, year, period, range, preNext);

  // the real problem is next year what to do

  // normalize
  let menstrStart = normalizeDate(start, month, year);

  // update date
  start = menstrStart.day;
  month = menstrStart.month;
  year = menstrStart.year;

  // manipulate
  let end = start + period - 1;
  
  let problemPoint = Math.floor(range / 2);

  let prePoint = problemPoint - 3;
  let postPoint = problemPoint + 3;

  problemPoint = start + problemPoint - 1;
  prePoint = start + prePoint - 1;
  postPoint = start + postPoint - 1;

  let menstrEnd = normalizeDate(end, month, year);

  let preProblem = normalizeDate(prePoint, month, year);
  
  let problemDate = normalizeDate(problemPoint, month, year);
    
  let postProblem = normalizeDate(postPoint, month, year);

  let preMenstr = normalizeDate(start + range - preNext, month, year);

  // struct
  return new WomenProblem(menstrStart, menstrEnd, preProblem, problemDate, postProblem, preMenstr, range);
}

export function *predictWomenProblemNext(start, month, year, period, range, preNext = 4) {

  // auto parsing integer
  [ start, month, year, period, range, preNext ] = autoParseInt(start, month, year, period, range, preNext);

  while (true) {

    yield predictWomenProblem(start, month, year, period, range, preNext);
    start = start + range;
  }
}

export function createCalendarDataWP(womenProblem, option = {
  customResult: (date, k) => date,
}) {

  const {
    menstrStart,
    menstrEnd,
    preProblem,
    problemPoint,
    postProblem,
    preMenstr,
    menstrRange
  } = womenProblem;

  const menstrClose = normalizeDate(menstrStart.day + menstrRange - 1, menstrStart.month, menstrStart.year);

  // k: 0
  const menstrDateRange = getDateRange(menstrStart, menstrEnd);
  
  // k: 1
  const problemDateRange = [
    ...getDateRange(preProblem, normalizeDate(problemPoint.day - 1, problemPoint.month, problemPoint.year)),
    ...getDateRange(normalizeDate(problemPoint.day + 1, problemPoint.month, problemPoint.year), postProblem)
  ];

  // k: 2
  // problemPoint
  
  const problemPoints = getDateRange(normalizeDate(problemPoint.day - 1, problemPoint.month, problemPoint.year),normalizeDate(problemPoint.day + 1, problemPoint.month, problemPoint.year))

  // k: 3
  const preMenstrDateRange = getDateRange(preMenstr, menstrClose);

  return [
    ...menstrDateRange.map((date) => option.customResult(date, 0)),
    ...problemDateRange.map((date) => option.customResult(date, 1)),
    ...problemPoints.map((date) => option.customResult(date, 2)), // request 3 date
    ...preMenstrDateRange.map((date) => option.customResult(date, 3))
  ];
}

export function *createCalendarNextDataWP(start, month, year, period, range, preNext = 4, option = {
  customResult: (date, k) => date,
}) {

  // auto parsing integer
  // [ start, month, year, period, range, preNext ] = autoParseInt(start, month, year, period, range, preNext);

  const predictWomenProblem = predictWomenProblemNext(start, month, year, period, range, preNext);

  while (true) {

    const womenProblem = predictWomenProblem.next();
    yield createCalendarDataWP(womenProblem.value, option);
  }
}