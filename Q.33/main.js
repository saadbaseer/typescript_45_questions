// Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd.
//  Most ordinal numbers end in th,except 1, 2, and 3.
//initialized an array of numbers
var numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//looped through numbers
numArr.forEach(function (number) {
    var suffix = "th";
    if (number === 1) {
        suffix = "st";
    }
    else if (number === 2) {
        suffix = "nd";
    }
    else if (number === 3) {
        suffix = "rd";
    }
    console.log("".concat(number).concat(suffix));
});
