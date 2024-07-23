// Hello Admin: Make a array of five or more usernames,
// including the name 'admin'. Imagine you are writing code
// that will print a greeting to each user after they log in to a
//  website. Loop through the array,
//  and print a greeting to each user:
var users = ["saad", "yasir", "hammad", "tahir", "admin"];
users.forEach(function (user) {
    if (user === "admin") {
        console.log("hellow admin welcome hope you are good");
    }
    else {
        console.log("thanks ".concat(user, " for logging in again"));
    }
});
