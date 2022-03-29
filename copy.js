var list = [
    "sun", //0 -6
    "mon", //1 -5
    "tue", //2 -4
    "wed", //3 -3
    "thu", //4 -2
    "fri", //5 -1
];

// var list2 = list.slice(); //array copy korar fastest way
// var list2 = [...list]; //ES6 style
var list2 = Array.from(list);

list2[2] = "no day";
console.log(list, list2);
