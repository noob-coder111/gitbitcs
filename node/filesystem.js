const fs = require("fs");

// fs.readFile("file1.txt", "utf8", (err, data) => {
//   console.log(err, data);
// });

// a = fs.readFileSync("file1.txt");
// console.log(a.toString());

// console.log("Finished!");

// fs.writeFile("file1.txt", "I'm adding new data to it", () => {
//   console.log("written to file");
// });

b = fs.writeFileSync("file1.txt", "Trying sync.");
console.log(b);
console.log("Finished adding!");
