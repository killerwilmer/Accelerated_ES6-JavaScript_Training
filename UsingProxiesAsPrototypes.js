let person = {
    age: 27,
    firstName: 'Wilmer'
  };
  
  let handler = {
    get: function(target, name) {
      return name in target ? target[name] : 'Not exist!';
    }
  }
  
  var proxy = new Proxy({}, handler);
  
  Reflect.setPrototypeOf(person, proxy);
  
  console.log(person.firstName);//Validate direct object property
  
  console.log(person.hobbies);//if not exist print (Not exist!)