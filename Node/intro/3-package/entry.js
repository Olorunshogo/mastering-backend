// Manual approach (create package.json in the root, create properties etc)
//  npm init (step by step, press enter to skip)
// npm init -y (everything default)

const _ = require('lodash');

const items = [1, 2, [3, [4]]];
console.log(items);
const newItems = _.flattenDeep(items);
console.log(newItems); 
