// write a function that takes the last item of the second array, and adds it to the end of the first array.
let food = ["apple", "orange", "cake", "carrots", "pasta", "rice", "eggs"];

let numbers = ["1", "2", "3", "4"];

const addTheLast = function(food, numbers) {
  //   for (let i = 0; i < food.length; i++) {
  //     console.log('"' + food[i] + '"');
  //   }
  //   console.log('"' + numbers[numbers.length - 1] + '"');
  food.push(numbers[numbers.length - 1]);
  console.log(food);
};

addTheLast(food, numbers);
