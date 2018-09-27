var words = ["ground", "control", "to", "major", "tom"];


map(words, function(word) {
  return word.length;
});

map(words, function(word) {
  return word.toUpperCase();
});

map(words, function(word) {
  return word.split('').reverse().join('');
});



function map(aryInput, func) {
  var output = [];
  for (var a of aryInput) { //how to rec
  output.push(func(a));
  }
  console.log(output)
}


