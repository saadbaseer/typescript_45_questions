// Large Shirts: Modify the make_shirt() function so that shirts are large by default
// with a message that reads I love TypeScript. Make a large shirt and a medium shirtwith the
// default message, and a shirt of any sizewith a different message.
function make_shirt(size, message) {
    if (size === void 0) { size = "Large"; }
    if (message === void 0) { message = "i love typscript"; }
    console.log("make a ".concat(size, " size of shirt and write ").concat(message, " on it"));
}
make_shirt();
make_shirt("medium");
make_shirt("small");
