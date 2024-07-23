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

// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more
//  guests to invite to dinner.
console.log("got more spcae for guests");

guest.push("umair");
guest.unshift("waseem");
guest.splice(guest.length / 2, 0, "owais");
guest.forEach((invitaionto: string) => {
  //printed messege to them
  console.log(`hellow ${invitaionto} you are invited for the dinner tonight`);
});

//   Shrinking Guest List: You just found out that your new dinner table
//    won’t arrive in time for the dinner, and
//    you have space for only two guests.

console.log("unfortunately i can invite only two people for the dinner");
//used while loop for sending messege to the users that they cannot make it tonight
while (guest.length > 2) {
  //used pop method to pop th elements
  let removedGuest = guest.pop();
  //sent messege to them
  console.count(
    `sorry ${removedGuest} for today you will be invited next time`
  );
}
//mde new list and invited them using forEach method
guest.forEach((newlist) => {
  console.log(`\n${newlist} you are invited for dinner tonight`);
});
