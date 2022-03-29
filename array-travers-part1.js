var list = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
// for (var i = 0; i < list.length; i++) {
//     console.log("Element at", i, "offset is", list[i]);
// }

// for (var i = list.length - 1; i >= 0; i--) {
//     console.log("Element at", i, "offset is", list[i]);
// }

// processing time save pf CPU
var length = list.length; //only for time

// for (var i = 0; i < length; i++) {
//     console.log("Element at", i, "offset is", list[i]);
// }

//ittaaration
for (i in list) {
    console.log("Element at", i, "offset is", list[i]);
}
