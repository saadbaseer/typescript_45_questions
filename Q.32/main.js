// Checking Usernames: Do the following to create a program that simulates
// how websites ensure that everyone has a unique username.
//initialized current users
var current_users = ["Saad", "Tahir", "Noor", "Imtiaz"];
//initialized new users
var newusers = ["Yasir", "Hammad", "saad", "tahir"];
//looped through newusers for checking
newusers.forEach(function (newuser) {
    if (current_users.some(function (currentUser) { return currentUser.toLowerCase() === newuser.toLowerCase(); })) {
        console.log("".concat(newuser, " will need to enter a new username."));
    }
    else {
        console.log("".concat(newuser, " is available."));
    }
});
