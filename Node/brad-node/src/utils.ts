// Generate random number
export function generateRandomNumber(_range: number) {
  let randomNumber = Math.floor(Math.random() * _range) + 1;
  return randomNumber;
}

// Convert Celsius to Fahrenheit
export function celsiusToFahrenheit(celsius: number): string {
  const degreeFahrenheit: number = (celsius * 9/5) + 32;
  return `The value of ${celsius}°C is: ${degreeFahrenheit}°F.`;
}

// Posts
export const posts = [
  { id: 1, title: "Post One" },
  { id: 2, title: "Post Two" }
];

