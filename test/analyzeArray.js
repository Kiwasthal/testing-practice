export { analyzeArray };
let analyzeArray = arr => {
  let sum = 0;
  let max = -Infinity;
  let min = +Infinity;
  let obj = {};
  obj.average = (() => {
    for (let num of arr) sum += num;
    return sum / arr.length;
  })();
  obj.max = (() =>
    arr.reduce((prev, cur) => (cur > prev ? (max = cur) : max), max))();
  obj.min = (() =>
    arr.reduce((prev, cur) => (cur < prev ? (min = cur) : min), min))();
  obj.length = arr.length;
  return obj;
};
