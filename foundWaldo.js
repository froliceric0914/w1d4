function findWaldo(arr, found) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === "Waldo") {
      found(arr);   // execute callback
    }
  }
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