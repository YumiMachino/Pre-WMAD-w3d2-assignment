// write a function that takes every item in the array, and adds the word 'HOORAY' to the end of it

let food = ["apple", "orange", "cake", "carrots", "pasta", "rice", "eggs"];

const addHooray = function(food) {
  for (let i = 0; i < food.length; i++) {
    console.log(food[i] + " " + "HOORAY");
  }
};

//answer:
// const addHooray = function (arr) {
//   for (i = 0; i < arr.length; i++) {
//     arr[i] = arr[i] + "Hooray"
//   }
//   console.log(arr)
// };

addHooray(food);
