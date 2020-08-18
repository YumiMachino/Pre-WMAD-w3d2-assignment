// write a function that takes the last item of the second array, and adds it to the end of the first array.
let food = ["apple", "orange", "cake", "carrots", "pasta", "rice", "eggs"];

let numbers = ["1", "2", "3", "4"];

const addTheLast = function(food, numbers) {
  console.log(food[food.length - 1] + " " + numbers[numbers.length - 1]);
};

addTheLast(food, numbers);
