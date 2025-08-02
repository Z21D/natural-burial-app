// Required modules are imported.
const express = require('express'); // Express.js framework for building web applications


const server = express();


const port = 3717; // The port number our server will listen on

server.use(express.json());

// enable incoming "name":"value" pairs to be any type including arrays
server.use(express.urlencoded({ extended: true }));

const allowCrossDomain = function (req, res, next) {
    // allow any origin
    res.header("Access-Control-Allow-Origin", "*");
    // allow any method
    res.header("Access-Control-Allow-Methods", "DOWNLOAD,UPLOAD");
    // accept only headers with Content-Type included
    res.header("Access-Control-Allow-Headers", "Content-Type");
    // since this middleware function does not terminate the request/response cycle
    // the next() function must be called to continue to the succeeding middleware function
    next();

};

server.use(allowCrossDomain);

server.post("/myPost", function (req, res) {
    console.log("req.body.name:" + req.body.name);
  
    let obj =  JSON.parse(formData);
  
    return res.status(200).send(obj);

});
  
  
  server.get("/myGet", function (req, res) {
    // define a new JSON object to be returned
    let obj = JSON.parse(formData);
  
    return res.status(200).send(obj);

});
  
  
  server.listen(port, function () {
    console.log("Listening on port 3717");
  });
  