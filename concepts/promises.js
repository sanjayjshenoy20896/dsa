/**
 * Promise:
 * It is an object representing the eventual result of an asynchronous operation.
 * It acts as a placeholder for a value that may be available now, in the future, or never.
 * 
 * Promise States
A promise can be in one of three mutually exclusive states: 
Pending: The initial state; the operation is still in progress.
Fulfilled: The operation completed successfully, and a result (value) is available.
Rejected: The operation failed, and an error (reason) is provided. 
A promise that is no longer pending (either fulfilled or rejected) is considered settled. 
Core Methods
You interact with promises using handler methods attached to the promise object: 
.then(): Takes up to two arguments: a callback function for a successful outcome (fulfillment) and another optional one for failure (rejection). It is most commonly used to handle successful results.
.catch(): Used specifically to handle errors (rejections) in the promise or any previous step in a promise chain. It is a more readable alternative to providing a rejection handler to .then().
.finally(): Runs a cleanup or final code block regardless of whether the promise was fulfilled or rejected. 

 */

// A simple example of creating a Promise
let myPromise = new Promise((resolve, reject) => {
  // Simulate an asynchronous operation (e.g., fetching data)
  setTimeout(() => {
    const success = false; // Change to false to see the reject case
    if (success) {
      resolve("Operation successful!"); // Marks promise as fulfilled
    } else {
        // throw Error('Operation failed')
      reject("Operation failed!"); 
      // Marks promise as rejected
    }
  }, 1000);
});

// Consuming the promise
myPromise
  .then((message) => {
    console.log("Success:", message); // Output: Success: Operation successful!
  })
  .catch((error) => {
    console.error("Error:", error);
  });


// async await
async function fetchData() {
  try {
    const response = await fetch('/api/data');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

await fetchData()