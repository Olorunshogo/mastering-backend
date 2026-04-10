import EventEmitter from "events";

const myEmitter = new EventEmitter();

function greetHandler(_name: string) {
  const result: string = "Hello " + _name;
  console.log(result);
}

function goodbyeHandler(_name: string) {
  const result: string = "Goodbye " + _name;
  console.log(result);
}

// Register event listener
myEmitter.on('greet', greetHandler);
myEmitter.on('goodbye', goodbyeHandler)

// Emit events
myEmitter.emit('greet', 'John');
myEmitter.emit('goodbye', 'John')

// Error Handling
myEmitter.on('error', (error) => {
  console.log("An Error Occured: ", error)
});
// myEmitter.emit('error', new Error("Something went wrong"));

