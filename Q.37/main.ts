// Large Shirts: Modify the make_shirt() function so that shirts are large by default
// with a message that reads I love TypeScript. Make a large shirt and a medium shirtwith the
// default message, and a shirt of any sizewith a different message.

function make_shirt(
  size: string = "Large",
  message: string = "i love typscript"
) {
  console.log(`make a ${size} size of shirt and write ${message} on it`);
}
make_shirt();
make_shirt("medium");
make_shirt("small");
