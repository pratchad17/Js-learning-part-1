var list = ["a", "x", "z", "b", "y", "c", "f", "d", "w", "e", "g"];
list.sort();
console.log(list);

var number = [1, 2, 3, 44, 33, 22, 11, 9, 8, 7, 6, 5, 23, 111];
number.sort();
console.log(number);

// swap
// with temp
var a = 200,
    b = 300;

/*var c = a;
a = b;
b = c;*/

[a, b] = [b, a]; //new swap method without temp

console.log(a, b);

var length = number.length - 1;

for (var i = 0; i < length; i++) {
    for (var j = 0; j < length; j++) {
        if (number[j] > number[j + 1]) {
            [number[j], number[j + 1]] = [number[j + 1], number[j]];
        }
    }
}
console.log(number);
