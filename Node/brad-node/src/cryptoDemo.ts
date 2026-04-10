import * as crypto from "crypto";

// createHash(): It takes in the algorithm: Explicitly type the hash instance
const hash: crypto.Hash = crypto.createHash("sha256");

// update() accepts BinaryLike, so string is valid
hash.update("password1234");

// digest() returns string when encoding is provided
const hashedPassword: string = hash.digest("hex");

console.log("Hashed password: ", hashedPassword);

// Properly type callback parameters
crypto.randomBytes(16, (error: Error | null, buffer: Buffer): void => {
  if (error) {
    throw new Error("There's an error here.");
  }

  const randomHex: string = buffer.toString("hex");
  console.log("Random hex is: ", randomHex);
});

// createCipheriv & createDecipheriv
const algorithm = 'aes-256-cbc';
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);

// Encryption
const cipher = crypto.createCipheriv(algorithm, key, iv);
let encrypted = cipher.update('Hello, this is a secret message', 'utf-8', 'hex');
encrypted += cipher.final('hex');
console.log("Encrypted mesaage is: ", encrypted);

// Decryption
const decipher = crypto.createDecipheriv(algorithm, key, iv);
let decrypted = decipher.update(encrypted, 'hex', 'utf-8');
decrypted += decipher.final('utf-8');
console.log("Decrypted mesaage is: ", decrypted);

