var n = 12;
var result;
var reminder = n % 2;

result = 0 == reminder ? "even" : "odd";
console.log("This number is", result);

result = n < 0 ? "negative" : "positive";
console.log("This number is", result);
