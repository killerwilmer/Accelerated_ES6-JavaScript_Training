let set = new Set([1, 1, 1]);

set.add(2);
set.add(2);

for (element of set) {
  console.log(element);//only show unique element, not show repeated
}