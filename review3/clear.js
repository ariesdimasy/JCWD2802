// Returns a Promise that resolves after "ms" Milliseconds
const timer = ms => new Promise(res => setTimeout(res, ms))

async function load () { // We need to wrap the loop into an async function for this to work
  for (var i = 0; i < 10; i++) {
    console.log(i);
    await timer(1000); // then the created Promise can be awaited
    console.clear()
  }
}

load();