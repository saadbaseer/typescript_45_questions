// Great Magicians: Start with a copy of your program from Exercise 39. Write a
//  function called make_great() that modifies the array of magicians by adding
//  the phrase the Great to each magician’s name. Call show_magicians() to see
//   that the list has actually been modified.

// initialized the magicians names in an array
let magiciansName: string[] = ["ALbert", "Carlos", "Johnson"];
//made a function which takes magicians as a perameter
function show_magicians(magicians: string[]) {
  magicians.forEach((magicians) => {
    console.log(magicians);
  });
}

function make_great(magicians: string[]) {
  for (let i = 0; i < magicians.length; i++) {
    magicians[i] = magicians[i] + " " + "the Great";
  }
}
make_great(magiciansName);
show_magicians(magiciansName);
