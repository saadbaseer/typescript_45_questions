// Magicians: Make a array of magician’s names. Pass the array to a function
//  called show_magicians(), which prints the
// name of each magician in the arra
// initialized the magicians names in an array
var magiciansName = ["ALbert", "Carlos", "Johnson"];
//made a function which takes magicians as a perameter
function show_magicians(magicians) {
    magicians.forEach(function (magicians) {
        console.log(magicians);
    });
}
//called the function by passing the array
show_magicians(magiciansName);
