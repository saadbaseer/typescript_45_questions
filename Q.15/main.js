// Changing Guest List: You just heard that one of your guests can’t make the
//  dinner, so you need to send out a new set of invitations. You’ll have to think
//   of someone else to invite.
//initalized guest array
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
