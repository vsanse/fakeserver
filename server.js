const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const fs = require('fs');
const port = process.env.PORT || 5000;

server.use(middlewares);

server.get('/getRandomWord', (req, res) => {
    const fileContents = fs.readFileSync('./db.json', 'utf-8');
    const words = JSON.parse(fileContents);
    const { fiveLetterWords } = words;
    // select a random word
    const word = fiveLetterWords[Math.floor(Math.random() * fiveLetterWords.length)]
  
    // return it as the response
    res.send(word)
  })

server.use(router);
server.listen(port);
  