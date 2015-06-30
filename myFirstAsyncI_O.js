var fs = require('fs')
var path = process.argv[2]
fs.readFile(path, 'utf8', function(err,data){
  if(err) throw err;
  var buffer = data;
  var stringArray = buffer.split('\n')
  var answer = stringArray.length - 1
  console.log(answer)
})
