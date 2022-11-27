
//question
//Write a function that takes an array of numbers as input. It should output an array of those same numbers sorted from lowest to highest.

//sample input = [5,6,1,3,4,2]
//Expected output = [1,2,3,4,5,6]
//!!!!!!!! need to create a function called bubbleSort,..which increases the values by definion of i.

function bubbleSort(array) {
  var done = false;
  while (!done) {
    done = true;
    for (var i = 1; i < array.length; i += 1) {
      if (array[i - 1] > array[i]) {
        done = false;
        var tmp = array[i - 1];
        array[i - 1] = array[i];
        array[i] = tmp;
      }
    }
  }

  return array;
}

var numbers =[5,6,1,3,4,2];
bubbleSort(numbers);
console.log(numbers);