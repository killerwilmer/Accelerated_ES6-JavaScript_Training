var inventory = [
    {name: 'apples', quantity: 2},
    {name: 'bananas', quantity: 0},
    {name: 'cherries', quantity: 5}
  ];
  
  function findInventory(name) {
    return(inventory.find(inv => inv.name===name));
  }
  
  console.log(findInventory('cherries'));
  