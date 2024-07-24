// Checking Usernames: Do the following to create a program that simulates
// how websites ensure that everyone has a unique username.

//initialized current users
let current_users: string[] = ["Saad", "Tahir", "Noor", "Imtiaz"];
//initialized new users
let newusers: string[] = ["Yasir", "Hammad", "saad", "tahir"];
//looped through newusers for checking
newusers.forEach((newuser) => {
  if (
    current_users.some(
      (currentUser) => currentUser.toLowerCase() === newuser.toLowerCase()
    )
  ) {
    console.log(`${newuser} will need to enter a new username.`);
  } else {
    console.log(`${newuser} is available.`);
  }
});
