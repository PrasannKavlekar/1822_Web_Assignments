console.log("number-script.js output :");
function factorial(n) {
  var res = 1;
  for (var i = 2; i <= n; i++) {
    res = res * i;
  }
  console.log("Factorial of " + n + " is " + res);
}

function isNumberEven(n) {
  if (n % 2 == 0) {
    console.log(n + " is even");
  } else {
    console.log(n + " is odd");
  }
}

function isNumberPrime(n) {
  var flag = 0;
  for (i = 2; i <= n / 2; i++) {
    if (n % i == 0) {
      flag = 1;
    }
  }
  if (n == 1) {
    console.log(n + " is not a prime nor a composite number");
  } else if (flag == 1) {
    console.log(n + " is a composite number");
  } else {
    console.log(n + " is a prime number");
  }
}

function reverseNumber(n) {
  var rev = 0;
  var orgn = n;
  while (n > 1) {
    remainder = n % 10;
    rev = parseInt(rev * 10 + remainder);
    n /= 10;
  }
  if (orgn == rev) {
    console.log("The reverse of " + orgn + " is the number itself since this is a Palindrome");
  } else {
    console.log("Reverse of " + orgn + " is " + rev);
  }
}

function listFibonacciNumbers(n) {
  if (n == 1) {
    console.log("0");
  } else if (n == 2) {
    console.log("0 1");
  } else {
    var res = "0 1";
    first = 0, second = 1;
    for (i = 2; i < n; i++) {
      third = first + second;
      res = res + " " + third;
      first = second;
      second = third;
    }
    console.log(res);
  }
}

function isArmstrongNumber(n) {
  var orgn = n,
    res = 0;
  while (orgn > 0) {
    rem = orgn % 10;
    res += rem * rem * rem;
    orgn = parseInt(orgn / 10);
  }
  if (res == n) {
    console.log(res + " is an Armstrong Number");
  } else {
    console.log(res + " is not an Armstrong Number");
  }
}


//Testing the functions
factorial(5);
isNumberEven(1);
isNumberPrime(1);
reverseNumber(1213121);
isArmstrongNumber(153);
listFibonacciNumbers(5);
