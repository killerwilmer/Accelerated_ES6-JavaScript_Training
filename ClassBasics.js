class Person {
    constructor(name) {
      this.name = name;
      this.lastName = 'Arteaga'
    }
    greet() {
      console.log('Hello, ' + this.name + ' ' + this.lastName);
    }
  }
  
  let person = new Person('Wilmer');
  
  person.greet();