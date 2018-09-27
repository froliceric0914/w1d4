function findWaldo(arr, found) {
  arr.forEach(function(element) {
  if ("Wa") {
      found(arr);
    }
});
}

function actionWhenFound(arr) {
  for (var i = 0; i < arr.length; i++){
    if (arr[i] === "Waldo"){
      var waldoPos = i;
      console.log("Found Waldo at index " + waldoPos);
    }

  }

}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);

var array1 = ['a', 'b', 'c'];

// arr.forEach(function(element) {
//   if ("Waldo") {
//       found(arr);
//     }
// });
