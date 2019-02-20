let numbers = [1,2,3];

let [a, b] = numbers;//copy the values

console.log(a);
console.log(b);
console.log(numbers);//the array is same

let [x, ...y] = numbers;//last value
console.log(x);
console.log(y);