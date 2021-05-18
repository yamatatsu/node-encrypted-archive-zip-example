const { encrypt } = require('./encrypt')


const content = [
  ["id", "name", "type"],
  ["1", "hoge", "A"],
  ["2", "fuga", "B"],
  ["3", "peko", "C"],
].map(row => row.map(val => `"${val}"`).join(",")).join("\n")


encrypt({ 
  content, 
  filename: "foo.csv", 
  outputPath: "../output/example.zip", 
  password: 'himitsu',
})
