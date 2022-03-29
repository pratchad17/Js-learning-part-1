var movieRating = "g";
var age = 15;

/*
if ("pg" == movieRating && age >= 13) {
    console.log("you can watch this movie");
} else if ("r" == movieRating && age >= 18) {
    console.log("you can watch this movie");
} else if ("g" == movieRating) {
    console.log("you can watch this movie");
} else {
    console.log("you can't watch this movie");
}*/

if (
    ("pg" == movieRating && age >= 13) ||
    ("r" == movieRating && age >= 18) ||
    "g" == movieRating
) {
    console.log("ypu can watch this movie");
} else {
    console.log("you can't watch this movie");
}
