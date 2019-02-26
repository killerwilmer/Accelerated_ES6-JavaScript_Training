class Person {
    constructor(name) {
      this.name = name;
      this.lastName = 'Arteaga'
    }
    greet() {
      console.log('Hello, ' + this.name + ' Age ' + this.age);
    }
  }
  
  class Wilmer extends Person {
    constructor(age) {
      super('Wilmer');
      this.age = age;
    }
    
    greet() {
      console.log('Hello!');
    }
    
    greetTwice() {
      super.greet();
      this.greet();
    }
  }
  
  let wilmer = new Wilmer(30);
  
  wilmer.greetTwice();