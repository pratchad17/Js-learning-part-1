var mylist = ["apple", "banana", "orange"];

mylist[mylist.length] = "grape";

mylist.push("pineapple"); //last add
mylist.unshift("plum"); //first add
mylist.unshift("jackfruit"); //first add

// mylist.pop(); //last element remove

var lastElement = mylist.pop(); // last element remove and showw the last element

console.log(mylist);
console.log(lastElement);
