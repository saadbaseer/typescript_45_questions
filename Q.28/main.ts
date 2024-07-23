// Stages of Life: Write an if-else chain that determines a
// person’s stage of life. Set a valuefor the variable age, and then:
let person = 20;
if (person < 2) {
  console.log("the person is baby");
  
} else if (person >= 2 && person < 4) {
    
  console.log("the person is toddler");
} else if (person >= 4 && person < 13) {

  console.log("the person is a kid");
} else if (person >= 13 && person < 20) {

  console.log("the person is a teenager");
} else if (person >= 20 && person < 65) {

  console.log("the person is adult");
} else if (person >= 65) {

  console.log("the person is an elder");
}
