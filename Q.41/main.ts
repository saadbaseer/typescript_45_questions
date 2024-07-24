// Magicians: Make a array of magician’s names. Pass the array to a function
//  called show_magicians(), which prints the
// name of each magician in the arra

// initialized the magicians names in an array
let magiciansName: string[] = ["ALbert", "Carlos", "Johnson"];
//made a function which takes magicians as a perameter
function show_magicians(magicians: string[]) {
  magicians.forEach((magicians) => {
    console.log(magicians);
  });
}
//called the function by passing the array
show_magicians(magiciansName);
