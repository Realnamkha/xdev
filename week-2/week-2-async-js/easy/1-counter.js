// We have already covered this in the second lesson, but as an easy recap try to code a counter in Javascript
// It should go up as time goes by in intervals of 1 second

let counter = 0;
function callback() {
  counter++;
  console.log("Counter:", counter);
}
const counterId = setInterval(callback, 1000);

const intervalId = setInterval(() => {
  counter++;
  console.log("Counter:", counter);
}, 1000);
intervalId;
counterId;
