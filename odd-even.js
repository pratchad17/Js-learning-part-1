var n = 13;
var result;

var reminder = n % 2;

if (0 == n) {
    result = "This is a neutral number";
} else if (0 == reminder) {
    result = "This is an even number";
} else {
    result = "This is an odd number";
}

console.log(result);




