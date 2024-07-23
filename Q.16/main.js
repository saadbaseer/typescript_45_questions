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
