let person = {
    age: 27,
    firstName: 'Wilmer'
  };
  
  let handler = {
    get: function(target, name) {
      return name in target ? target[name] : 'Not exist!';
    },
    set: function(target, property, value) {
      if (value.length >= 2) {
        Reflect.set(target, property, value);
      }
    }
  }
  
  var proxy = new Proxy(person, handler);
  
  proxy.firstName = 'L';//if not greater than 2 no change anything 
  proxy.firstName = 'Leonel';//if is greater than 2 change the value
  
  console.log(proxy.firstName);