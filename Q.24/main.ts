// More Conditional Tests: You don’t have to limit the number of tests you 
// create to 10. If you want to try more comparisons, write more tests.
//  Have at least one True and one False result for each of the 
// following:


//checking with numbers and logical operators
console.log(5<10||9>15&& 8<10||5>13,"i predict true");
console.log(5<10||9>15&& 8<10||13>5,"i predict false");

//checking with arrays
let myArray=[2,3,6,1]
console.log(myArray.includes(6), "i predict true");
console.log(myArray.includes(9), "i predict false");

//checking with logical operators
console.log(false|| !false, "i prodict true");
console.log(true && !true, "i predict false ");

//numerical test
console.log(10>5==10<5, "i predict false");
console.log(20>10==50<60, "i predict true");

//checking with strings
console.log("Saad"=="Saad", "i predict true");
console.log("Saad"=="saad", "i predict false");