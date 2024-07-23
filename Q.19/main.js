// Dinner Guests: Working with one of the programs from Exercises 14 
// through 18, print a message indicating the number of people you are 
// inviting to dinner.
var guest = ["Tahir", "Imtiaz", "Noor", "Aryan"];
guest.forEach(function (invitaionto) {
    //printed messege to them
    console.log("hellow ".concat(invitaionto, " you are invited for the dinner tonight"));
});
var unableToAttend = "Aryan";
//printed that a guest cant make it to dinner
console.log("".concat(unableToAttend, " cant make it to dinner"));
//initialized new guest
var newGuest = "uzair";
//replaced the guest
guest[guest.indexOf(unableToAttend)] = newGuest;
//used forEach method to iterate
guest.forEach(function (invitaionto) {
    //printed messege to them
    console.log("hellow ".concat(invitaionto, " you are invited for the dinner tonight"));
});
// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more
//  guests to invite to dinner.
console.log("got more spcae for guests");
guest.push("umair");
guest.unshift("waseem");
guest.splice(guest.length / 2, 0, "owais");
guest.forEach(function (invitaionto) {
    //printed messege to them
    console.log("hellow ".concat(invitaionto, " you are invited for the dinner tonight"));
});
console.log("unfortunately i can invite only two people for the dinner");
//used while loop for sending messege to the users that they cannot make it tonight
while (guest.length > 2) {
    //used pop method to pop th elements
    var removedGuest = guest.pop();
    //sent messege to them
    console.count("sorry ".concat(removedGuest, " for today you will be invited next time"));
}
//mde new list and invited them using forEach method
guest.forEach(function (newlist) {
    console.log("\n".concat(newlist, " you are invited for dinner tonight"));
});
// Dinner Guests: Working with one of the programs from Exercises 14 
// through 18, print a message indicating the number of people
//  you are inviting to dinner.
console.log("\ni am inviting only ".concat(guest.length, " people for dinner tonight"));
