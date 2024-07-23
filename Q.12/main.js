// Greetings: Start with the array you used in Exercise 11, but instead of just
// printing each person’s name, print a message to them. The text of each message
//  should be the same, but each message should be personalized
// with the person’s name.
//initialized array
var myFriends = ["Tahir", "Imtiaz", "Aryan", "Noor"];
//used forEach method to itertate over the elements
myFriends.forEach(function (myFriends) {
    //printed the messege to each 
    console.log("hellow ".concat(myFriends, " how are you"));
});
