function log(msg) {
    console.log('Log entry: ' + msg);
  }
  
  let handler = {
    apply: function(target, thisArg, argumentsList) {
      if (argumentsList.length == 1){
        return  Reflect.apply(target, thisArg, argumentsList)
      }
    }
  };
  
  let proxy = new Proxy(log, handler);
  
  proxy('Hello');// if has 1 argument all is ok
  
  proxy('Hello', 10);// if has more than 1 argument does nothing