import os from "os";

// OS Module
// This will give information about system. It's nice to create visualization about something that want to interact with the system

// User Info
console.log("THis users infp is: ", os.userInfo());


// totalMemory()
console.log(`The total memory is: ${os.totalmem()}`);

// freemem()
console.log(`The free memory here is ${os.freemem()}`);

// cpus
console.log(os.cpus());
