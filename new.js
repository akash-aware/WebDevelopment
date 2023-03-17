/*Express is a fast, assertive, essential and moderate web framework of Node.js. You can assume express as a layer built on the top of the Node.js that helps manage a server and routes.
It provides a robust set of features to develop web and mobile applications.*/
const express = require('express');
const path = require('path');
//this is the express object
const app = express()
const port = 3000
app.get('/', (req, res) => {
    res.end("Hello This is Response from the server")
})
//this is to listen on port
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })