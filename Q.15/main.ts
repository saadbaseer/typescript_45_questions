// Changing Guest List: You just heard that one of your guests can’t make the
//  dinner, so you need to send out a new set of invitations. You’ll have to think
//   of someone else to invite.

//initalized guest array
let guest: string[] = ["Tahir", "Imtiaz", "Noor", "Aryan"];

guest.forEach((invitaionto: string) => {
  //printed messege to them
  console.log(`hellow ${invitaionto} you are invited for the dinner tonight`);
});
let unableToAttend: string = "Aryan";
//printed that a guest cant make it to dinner
console.log(`${unableToAttend} cant make it to dinner`);
//initialized new guest
let newGuest: string = "uzair";
//replaced the guest
guest[guest.indexOf(unableToAttend)] = newGuest;

//used forEach method to iterate
guest.forEach((invitaionto: string) => {
  //printed messege to them
  console.log(`hellow ${invitaionto} you are invited for the dinner tonight`);
});
