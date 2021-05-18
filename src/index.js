var fs = require('fs');
const { encrypt } = require('./encrypt')

const content = [
  ["id", "name", "type"],
  ["1", "hoge", "A"],
  ["2", "fuga", "B"],
  ["3", "peko", "C"],
].map(row => row.map(val => `"${val}"`).join(",")).join("\n")

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  encrypt({
    content,
    filename: "foo.csv",
    writableStream: res,
    password: 'himitsu',
  })
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
