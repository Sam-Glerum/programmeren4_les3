const express = require('express');
const server = express();
var port = process.env.PORT || 8080;

server.get('/hello', (req, res) => {
   res.json({
       "message": "Hello mate"
   })
});

server.listen(port, () => {
    console.log("Server is listening on port " + port);
});