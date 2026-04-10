SELECT version();import url from "url";

const urlString: string = "https://www.google.com/search?q=hello+world";

// URL Object
const urlObj = new URL(urlString);

console.log("The url object is: ", urlObj);

// format()
console.log("Format back to string: ", url.format(urlObj));

// import.meta.url
console.log("Url is: ", import.meta.url);

console.log("Search is: ", urlObj.search);

const params = new URLSearchParams(urlObj.search);
console.log("Params is: ", params);
console.log("Get q is: ", params.get('q'));
params.append('limit', '5');
params.delete('limit');
console.log("Params is: ", params);


