// we have created server , see the routing operations , listen request and how to response , add status codes
const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
    res.setHeader("Content-type", "text/html");
    let path = "./";
    switch (req.url) {
        case "/":
            path += "index.html";
            res.statusCode = 200;
            break;
        case "/about-blaha":
            res.statusCode = 301;
            res.setHeader("Location", "/about");         // set header sets the header to a new url , a new http request is made 
           res.end();
            break;
        case "/about":
            path += "about.html";
            res.statusCode = 200;
            break;
        default:
            res.statusCode = 404;
            break;
    }
    if (path !== "./") {
        fs.readFile(path, (err, data) => {
            if (err) {
                console.log("this is the error" + "   " + err);
            } else {
                res.write(data);
                res.end();
            }
        });
    }
});

server.listen(3000, "localhost", () => {
    console.log("listen request at port 3000");
});