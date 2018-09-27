var input = [
  { x: 3, y: 4 },
  { x: 12, y: 5 },
  { x: 8, y: 15 }
];

//access to the value
// var x01 = input[0]['x'];
// var y01 = input[0]['y']
// var x02 = input[1]['x']
// console.log(x01);


var result = input.map(function(num){
  var x = num['x'];
  var y = num['y'];
  //console.log(x)
  var finalResult = Math.sqrt(Math.pow(x,2)+Math.pow(y,2))
  return finalResult;
});


console.log(result[0] === 5);
console.log(result[1] === 13);
console.log(result[2] === 17);
