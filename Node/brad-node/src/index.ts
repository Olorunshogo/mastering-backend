console.log();
console.log('Hello World!');

import { generateRandomNumber, celsiusToFahrenheit, posts } from "./utils.js";

console.log(`Random number is: ${generateRandomNumber(700)}`);
console.log(`30°C in Fahrenheit: ${celsiusToFahrenheit(30)}`);

console.log(posts[0], posts[1]);
console.log("The length of posts is: ", posts.length);



