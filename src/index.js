const express = require('express');

const api = express();

//This will let our program access this directory even if we move the folder around our system. Cool.
api.use(express.static(__dirname + '/public'));

api.listen(3000, () => {
  console.log('API up and running!');
});

// api.get('/', (req, res) => {
//   console.log(req);
//   res.send('Hello, world!');
// });
