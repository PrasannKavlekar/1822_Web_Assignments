console.log("\n\narray-script.js output :");

function printArray() {
  var a = [1, 2, 1, 24];
  console.log("Elements in the array are ");
  for (var i in a) {
    console.log(" " + a[i]);
  }
}


//testing functions
printArray();
