// Your Own Array: Think of your favorite mode of transportation, such as
//  a motorcycle or a car, and make a list that stores several examples.
//  Use your list to print a series of statements about these items, such
//  as “I would like to own
// a Honda motorcycle.”

//initialized th earray
let favoriteTransportaion: string[] = ["Honda", "delex", "civic", "audi"];
//used forEach method for iteration over the array
favoriteTransportaion.forEach((favorite) => {
  //printed messege
  console.log(`I would like to own ${favorite}`);
});
