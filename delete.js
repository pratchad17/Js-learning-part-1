var males = ["Tamim", "Saki", "Mash", "Sabrina"];
var females = ["Karina", "Razia"];

// var lastFemale = males.pop();
// females.push(lastFemale);

var personRemove = males[3];
females.push(personRemove);

delete males[3];

console.log(males, females);
console.log(males.length, females.length);
