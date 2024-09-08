//your JS code here. If required.
// Function that returns a promise resolving with "Hello, world!" after 1 second
function getHelloWorld() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hello, world!");
    }, 1000);
  });
}

// Use the promise to update the text of the HTML element
getHelloWorld().then((result) => {
  const outputElement = document.getElementById('output');
  if (outputElement) {
    outputElement.textContent = result;
  }
});