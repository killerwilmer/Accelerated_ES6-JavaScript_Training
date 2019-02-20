const AGE = 27;
//AGE = 30;//Error
console.log(AGE);


//Const in Objs not change de value, only the pointer
const OBJ = {
  age: 20
};

console.log(OBJ);

OBJ.age = 25;

console.log(OBJ);