//prints a list of file
//in a given directory
//filtered by the extension of the file

var fs = require("fs")
var path = require("path")
var extension ="." + process.argv[3]
fs.readdir(process.argv[2], function(err,files){
  var answer = []
  if(err){
    console.log(err.message)
  }else{
    for(var i = 0; i < files.length; i++){
      var file = files[i]
      var currentE = path.extname(file)
      if(currentE == extension){
        answer.push(file)
      }
    }
  }
  for(var j = 0; j < answer.length; j++){
    var currentFile = answer[j]
    console.log(currentFile)
  }
})
