const http = require("http");

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end("<h1>Node js</h1><p>Beginner learning it</p>");
});

server.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
