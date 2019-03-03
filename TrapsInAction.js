let person = {
    age: 27
  };
  
  let handler = {
    get: function(target, name) {
      return name in target ? target[name] : 'Not exist!';
    }
  }
  
  var proxy = new Proxy(person, handler);
  console.log(proxy.age);// print 27
  console.log(proxy.name);// print Not exist!