const {Console}=require('console');
const http = require("http");

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    console.log(req.url)
    if(req.url=='/'){
        res.statusCode = 200;
        res.end("<h1>Node js</h1><p>Beginner learning it</p>");
    }
    else if(req.url=="/about"){
        res.statusCode = 200;
        res.end("About section")
    }
    else{
        res.statusCode = 404;
        res.end("Page not found!")
    }
});

server.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
