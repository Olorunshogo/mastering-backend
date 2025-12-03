/// ======= Built-in Modules

// OS - 
// PATH
// FS - FileSystem
// HTTP

// OS Modules
// OS module provides many useful properties and methods for interacting with many operating system and servers.
const os = require("os");

// Info about current user
const user = os.userInfo();
console.log(user);

// Method returns the system uptime in seconds
const currentOs = {
  name: os.type(),
  uptime: os.uptime() + " seconds",
  eol: os.EOL,
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
  platform: os.platform(),
};
console.log(currentOs);



