// Guest List: If you could invite anyone, living or deceased, to dinner, 
// who would you invite? Make a list that includes at least three people you’d 
// like to invite to dinner. Then use your list to print a message to each person,
//  inviting them to dinner.
//initalized guest array
var invitaion = ["Tahir", "Imtiaz", "Noor", "Aryan"];
//used forEach method to iterate
invitaion.forEach(function (invitaionto) {
    //printed messege to them
    console.log("hellow ".concat(invitaionto, " you are invited for the dinner tonight"));
});
