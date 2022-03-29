var age = 20;
var result;

if (age < 0 || age >= 200) {
    result = "vampire";
} else if (age <= 1) {
    result = "baby";
} else if (age <= 3) {
    result = "toddler";
} else if (age <= 12) {
    result = "kid";
} else if (age < 18) {
    result = "teenager";
} else if (age >= 18) {
    result = "adult";
}
console.log("You are a", result);
