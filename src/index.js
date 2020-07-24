const express = require('express');
const bodyParser = require('body-parser');


const api = express();
api.use(bodyParser.json());

//This will let our program access this directory even if we move the folder around our system. Cool.
api.use(express.static(__dirname + '/public'));



api.post('/add', (req, res) => {
    console.log(req.body);
    res.send('It works!');
   });
   
api.listen(3000, () => {
  console.log('API up and running!');
});



// api.get('/', (req, res) => {
//   console.log(req);
//   res.send('Hello, world!');
// });
