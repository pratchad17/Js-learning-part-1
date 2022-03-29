function sayHi(name) {
    if (name) {
        console.log("Hello " + name);
    } else {
        console.log("How are you?");
    }
}

// sayHi("Pratchad");
// sayHi("Atiq");
// sayHi();
// sayHi(" ");

function isEven(number) {
    if (number % 2 == 0) {
        return true;
    }
    return false;
}

console.log(isEven(12));
console.log(isEven(15));
console.log(isEven(18));
