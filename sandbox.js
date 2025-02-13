let mealPromise = new Promise((resolve, reject) => {
    let ingredients = true; // We have ingredients

    if (ingredients) {
        resolve("Meal is ready!"); // Promise kept
    } else {
        reject("No meal today."); // Promise broken
    }
});

mealPromise
    .then(result => console.log(result)) // If kept, we see this
    .catch(error => console.log(error)); // If broken, we see this

    async function eatMeal() {
        try {
            let result = await mealPromise; // Waits for the promise
            console.log(result);
        } catch (error) {
            console.log(error);
        }
    }
    
    eatMeal();
    
    // Simulating a function that returns a Promise
function fetchData(id) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (id === 1) {
          resolve({ userId: 1, name: 'Mbali' });
        } else if (id === 2) {
          resolve({ userId: 2, name: 'Mbuso' });
        } else {
          reject('User not found');
        }
      }, 2000); // Simulating a delay of 2 seconds
    });
  }
  
  // Using Async/Await to handle the Promise
  async function getUserData(userId) {
    try {
      console.log('Fetching user data...');
      const userData = await fetchData(userId); // Waits for the Promise to resolve
      console.log('User data:', userData);
    } catch (error) {
      console.log('Error:', error); // Handles the error if the Promise is rejected
    }
  }
  
  // Another example with multiple asynchronous calls
  async function fetchMultipleUsers() {
    try {
      const user1 = await fetchData(1);
      const user2 = await fetchData(2);
      console.log('User 1:', user1);
      console.log('User 2:', user2);
    } catch (error) {
      console.log('Error fetching users:', error);
    }
  }
  
  // Function that returns a Promise with a delay
  function delay(seconds) {
    return new Promise(resolve => setTimeout(resolve, seconds * 1000));
  }
  
  // Using async/await with a delay
  async function run() {
    console.log('Starting...');
    
    // Fetch user data with a delay
    await getUserData(1); // Wait for the first call to finish
    console.log('Waiting for 3 seconds...');
    
    await delay(3); // Wait for 3 seconds
    
    console.log('Fetching more users...');
    await fetchMultipleUsers(); // Fetch multiple users
    
    console.log('Done!');
  }
  
  run(); // Call the run function to start the sequence
  