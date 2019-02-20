
function sumUp(...toAdd) {//Rest Operator ...
  console.log(toAdd);
  let result = 0;
  for (let i = 0; i < toAdd.length; i++) {
    result += toAdd[i];
  }
  return result;
}

console.log(sumUp(1,2,3,4,5));