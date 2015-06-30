var fs = require('fs')
var path = process.argv[2]
var buffer = fs.readFileSync(path)
var string = buffer.toString()
var stringArray = string.split('\n')
var answer = stringArray.length - 1
console.log(answer)
