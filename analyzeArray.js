export { analyzeArray };
let analyzeArray = arr => {
  let sum = 0;
  let obj = {};
  obj.average = (() => {
    for (let num of arr) sum += num;
    return sum / arr.length;
  })();
  return obj;
};
