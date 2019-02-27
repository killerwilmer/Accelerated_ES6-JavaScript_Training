let promise1 = new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve('Resolved!');
    }, 1000);
  });
  
  let promise2 = new Promise(function(resolve, reject) {
    setTimeout(function() {
      reject('Rejected!');
    }, 2000);
  });
  
  Promise.all([promise1, promise2]) //In (all) all promises must be resolved if not result is Rejected
    .then(function(success) {
      console.log(success);
    })
    .catch(function(error) {
      console.log(error);
    });
  
  
  Promise.race([promise1, promise2]) //In (race) returns the fastest regardless of the result, can be rejected or resolved
    .then(function(success) {
      console.log(success);
    })
    .catch(function(error) {
      console.log(error);
    });