// Unchanged Magicians: Start with your work from Exercise 42. Call the function
// make_great() with a copy of the array of magicians’ names. Because the original
// array will be unchanged, return the new array and store it in a separate array.
// Call show_magicians() with each array to show that you have one array of the 
// original names and one array with the Greatadded to each magician’s name.
// initialized the magicians names in an array
var magiciansName = ["ALbert", "Carlos", "Johnson"];
//made a function which takes magicians as a perameter
function show_magicians(magicians) {
    magicians.forEach(function (magicians) {
        console.log(magicians);
    });
}
var magicians = ["Alice", "David", "Chris"];
function make_great(magicians) {
    var greatMagicians = [];
    magicians.forEach(function (magician) {
        greatMagicians.push("".concat(magician, " the Great"));
    });
    return greatMagicians;
}
var greatMagicians = make_great(magicians.slice()); // Creates a new modified array
console.log("Original magicians:");
show_magicians(magicians); // Shows original names
console.log("Great magicians:");
show_magicians(greatMagicians); // Shows modified names
