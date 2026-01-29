// Creating a simple Promise
const myPromise = new Promise((resolve, reject) => {
  // Simulate an async operation
  const success = true;

  if (success) {
    resolve("Promise resolved successfully!");
  } else {
    reject("Promise rejected with an error!");
  }
});

// Using the Promise with .then() and .catch()
myPromise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

// Example 2: Promise with setTimeout
const delayedPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Data loaded after 2 seconds!");
  }, 2000);
});

delayedPromise.then((data) => {
  console.log(data);
});

// Example 3: Promise.all() - waits for all promises to resolve
const promise1 = Promise.resolve(3);
const promise2 = new Promise((resolve) => setTimeout(() => resolve("foo"), 100));
const promise3 = fetch("https://jsonplaceholder.typicode.com/posts/1").then((res) =>
  res.json()
);

Promise.all([promise1, promise2, promise3])
  .then((values) => {
    console.log("All promises resolved:", values);
  })
  .catch((error) => {
    console.log("One promise rejected:", error);
  });
