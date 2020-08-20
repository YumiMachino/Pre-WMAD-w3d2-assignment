// write a function that console logs each item of the array one line at a time

let example = [1, 2, 3, 4, "five", 6, 7];

const logItems = function(example) {
  for (i = 0; i < example.length; i++) {
    console.log(example[i]);
  }
};

// answer:
// const logItems = function (arr) {
//   for (i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
//   }
// };

logItems(example);
