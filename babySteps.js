var numbers = process.argv.slice(2)
var sum = 0
for(var i = 0; i < numbers.length; i++){
  var num = parseInt(numbers[i])
  sum = sum + num
}
console.log(sum)
