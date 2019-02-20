//Normal function
function fn() {
    console.log("Hello");
  }
  
  fn();
  
  //Arrow function
  var fnArrow = () => {
    console.log("Hello Arrow fn");
  };
  
  fnArrow();
  
  //Arrow function one line
  var fnOneLine = () => "One line";
  
  console.log(fnOneLine());
  
  //Arrow function parameters
  
  var fnParameters = (a, b) => {
    return a + b;
  };
  
  console.log(fnParameters(5, 6));