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
