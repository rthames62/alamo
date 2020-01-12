export const removeDuplicateObjsFromArray = (arr: any[], prop: string) => {
  return arr.reduce((a, b) => {
    if (a.temp.indexOf(b[prop]) === -1) {
      a.output.push(b);
      a.temp.push(b[prop]);
    }
    return a;
  }, {
    temp: [],
    output: [],
  }).output;
};
