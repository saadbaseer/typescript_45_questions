// Hello Admin: Make a array of five or more usernames,
// including the name 'admin'. Imagine you are writing code
// that will print a greeting to each user after they log in to a
//  website. Loop through the array,
//  and print a greeting to each user:

let users = ["saad", "yasir", "hammad", "tahir", "admin"];

users.forEach((user) => {
  if (user === "admin") {
    console.log("hellow admin welcome hope you are good");
  } else {
    console.log(`thanks ${user} for logging in again`);
  }
});
