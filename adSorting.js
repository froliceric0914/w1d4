var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];

var nameFunction = function(a, b) {
  var nameA = a.name;
  var nameB = b.name;
  if (nameA === nameB) {//do the two names equal each other
    return b.age - a.age;//sorting by age descending
  }
  else if (a < b){
    return -1;
  }
  else if (a > b) {
    return 1;
  }
    // return a.name.localeCompare(b.name);
;
    }



console.log(students.sort(nameFunction))


//   if(obj1.name === obj2.name){
//     return obj1.age - obj2.age;
//   }else {
//     return obj1.name.localeCompare(obj2.name); //how else i can compare strings
//   }
// }
// console.log(students.sort(customSort));