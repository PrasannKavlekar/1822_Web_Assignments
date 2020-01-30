console.log("\n\narray-script.js output :");

function printArray(arr) {
  //var arr = [5, 24, 1, -2];

  //console.log("Elements in the array are ");
  var string = "";
  arr.forEach(function(element) {
    string += element + " ";
  });
  //console.log(string);
  return string;
}

function sumElementsOfArray(arr) {
  var sum = 0;
  var arr = [5, 24, 1, -2];
  n = arr.length;

  for (var i = 0; i < n; i++) {
    sum += arr[i];
  }
  //console.log("Sum of the array: "+sum)
  return "Sum of the array :" + sum;
}

function findMaxInArray(arr) {
  var arr = [5, 24, 1, -2];
  var n = arr.length;
  var maximum = 0;

  for (var i = 0; i < n; i++) {
    if (arr[i] >= maximum) {
      maximum = arr[i];
      var loc = i + 1;
    }
  }
  //console.log("Max : " + maximum + " at " + loc);
  return "Max : " + maximum + " at " + loc;
}

function findMinInArray(arr) {
  var arr = [5, 24, 1, -2];
  var n = arr.length;
  var minimum = 1;

  for (var i = 0; i < n; i++) {
    if (minimum >= arr[i]) {
      minimum = arr[i];
      var loc = i + 1;
    }
  }
  //console.log("Min : " + minimum + " at " + loc);
  return "Min : " + minimum + " at " + loc;
}

function sortArray(arr) {
  var arr = [5, 24, 1, -2];

  arr.sort(function(a, b) {
    return a - b
  });
  printArray(arr);
}

//testing functions
//printArray();
sumElementsOfArray();
findMaxInArray();
findMinInArray();
sortArray();
