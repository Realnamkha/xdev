/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
  return new Promise((resolve) => {
    setTimeout(resolve, n * 1000);
  });
}
wait(2).then(() => {
  console.log("2 seconds passed");
});
module.exports = wait;
// wait(2) is called:

// The argument n is 2 (meaning 2 seconds).

// Inside wait, a new Promise is created.

// Inside the Promise constructor:

// The function (resolve) => { setTimeout(resolve, n * 1000); } runs immediately.

// It calls setTimeout with:

// resolve as the callback function to execute after the timeout.

// n * 1000 (so 2000 milliseconds = 2 seconds).

// Promise state is initially "pending":

// The promise is waiting for resolve() to be called.

// Meanwhile, the JS event loop continues running other tasks (does not block).

// After 2 seconds:

// The timer set by setTimeout expires.

// The callback resolve() is called.

// Calling resolve() fulfills the Promise — changing its state from "pending" to "fulfilled".

// .then() callback runs:

// Since the Promise is now fulfilled, the .then() attached to the Promise runs.

// It calls the function () => { console.log("2 seconds passed"); }.

// You see "2 seconds passed" printed on the console.
