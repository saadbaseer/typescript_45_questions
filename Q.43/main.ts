// Unchanged Magicians: Start with your work from Exercise 42. Call the function
// make_great() with a copy of the array of magicians’ names. Because the original
// array will be unchanged, return the new array and store it in a separate array.
// Call show_magicians() with each array to show that you have one array of the 
// original names and one array with the Greatadded to each magician’s name.


// initialized the magicians names in an array
let magiciansName: string[] = ["ALbert", "Carlos", "Johnson"];
//made a function which takes magicians as a perameter
function show_magicians(magicians: string[]) {
  magicians.forEach((magicians) => {
    console.log(magicians);
  });
}

let magicians: string[] = ["Alice", "David", "Chris"];

function make_great(magicians: string[]): string[] {
    let greatMagicians = [];
    magicians.forEach(magician => {
        greatMagicians.push(`${magician} the Great`);
    });
    return greatMagicians;
}

let greatMagicians = make_great(magicians.slice()); // Creates a new modified array
console.log("Original magicians:");
show_magicians(magicians); // Shows original names
console.log("Great magicians:");
show_magicians(greatMagicians); // Shows modified names