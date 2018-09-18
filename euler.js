// If we list all the natural numbers below 10 that are multiples of 3 or 5,
// we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Find the sum of all the multiples of 3 or 5 below 1000.

function problem1() { // Multiples of 3 and 5
  var sum = 0;

  for (var i = 0; i < 1000; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }

  return sum;
}

// Each new term in the Fibonacci sequence is generated by adding the previous two
// terms. By starting with 1 and 2, the first 10 terms will be:
//
// 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
//
// By considering the terms in the Fibonacci sequence whose values do not exceed
// four million, find the sum of the even-valued terms.

function problem2() { // Even Fibonacci numbers
  var i = 1;
  var j = 2;
  var k;
  var sum = 0;

  while (j < 4000000) {
    if (j % 2 === 0) {
      sum += j;
    }

    k = i + j;
    i = j;
    j = k;
  }

  return sum;
}

// The prime factors of 13195 are 5, 7, 13 and 29.
//
// What is the largest prime factor of the number 600851475143 ?

function problem3() {
  var primes = [];
  var factor = 0;
  var largestPrime = 2;

  while (largestPrime < Math.sqrt(600851475143)) {
    if (600851475143 % largestPrime === 0) {
      factor = largestPrime;
    }
    primes.push(largestPrime);
    largestPrime = nextPrime(primes);
  }

  return factor;
}

function nextPrime(factors) {
  n = factors[factors.length - 1];

  while (true) {
    n++;
    if (isPrime(factors, n)) {
      return n;
    }
  }
}



function isPrime(factors, n) {
  for (var i = 0; i < factors.length; i++) {
    if (n % factors[i] === 0) {
      return false;
    }
  }

  return true;
}

// A palindromic number reads the same both ways.
// The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
//
// Find the largest palindrome made from the product of two 3-digit numbers.

function problem4() { // Largest palindrome product
  largestPalidromeProduct = 0;

  for (var i = 100; i <= 999; i++) {
    for (var j = 100; j <= 999; j++) {
      product = i * j;
      if (isPalidrome(product) && (product > largestPalidromeProduct))
      largestPalidromeProduct = product;
    }
  }

  return largestPalidromeProduct;
}

function isPalidrome(n) {
  var str = n.toString();

  return str === str.split("").reverse().join('');
}

// 2520 is the smallest number that can be divided by each of the numbers from
// 1 to 10 without any remainder.
//
// What is the smallest positive number that is evenly divisible by all of the
// numbers from 1 to 20?
function problem5() { // Smallest multiple
  total_factors = {};

  for (var i = 2; i <= 20; i++) {
    factors = factorsOf(i);

    Object.keys(factors).forEach(function(k) {
      if (typeof(total_factors[k]) === 'undefined') {
        total_factors[k] = factors[k];
      } else if (factors[k] > total_factors[k]) {
        total_factors[k] = factors[k];
      }
    });
  }

  var product = 1;
  Object.keys(total_factors).forEach(function(k) {
    product *= Math.pow(parseInt(k), total_factors[k]);
  });

  return product;
}

function factorsOf(n) {
  var factors = [ 2, 3, 5, 7, 11, 13, 17, 19];
  var factorsOfN = {}
  var temp;

  factors.forEach(function(f) {
    if (n % f === 0) {
      temp = n;
      factorsOfN[f] = 0;
      while (temp % f === 0) {
        factorsOfN[f] += 1;
        temp /= f;
      }
    }
  });

  return factorsOfN;
}

// Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.
function problem6() {
  var sum_squares = 0;
  var square_sum = 0;

  for (var i = 1; i <= 100; i++) {
    sum_squares += Math.pow(i, 2);
    square_sum += i;
  }

  return Math.pow(square_sum, 2) - sum_squares;
}

// What is the 10 001st prime number?
function problem7() {
  factors = [];
  n = 2;

  while (factors.length < 10001) {
      if (isPrime(factors, n)) {
        factors.push(n)
      }

      n++;
  }

  return factors[10000];
}

// console.log(problem7());

function problem8(numString) {
  var contenders = [];
  var maxProduct = 0;
  var currMaxProduct = 0;

  var output = 0;
  numString.split("0").forEach(function(contender) {
    if (contender.length > 13) {
      contenders.push(contender);
    }
  });

  contenders.forEach(function(contender) {
    currMaxProduct =  findMaxProduct(contender);
    if (currMaxProduct >= maxProduct) {
      maxProduct = currMaxProduct;
    }
  })

  return maxProduct;
}

function findMaxProduct(numString) {
  var maxProduct = 1;
  var currProduct;

  for (var i = 0; i < 13; i++) {
    maxProduct *= parseInt(numString[i]);
  }

  var j = 13;
  currProduct = maxProduct;
  while (j < numString.length) {
    currProduct = currProduct * parseInt(numString[j]) / parseInt(numString[j - 13]);
    if (currProduct > maxProduct){
      maxProduct = currProduct;
    }
    j++;
  }

  return maxProduct;
}

var n = "73167176531330624919225119674426574742355349194934\
96983520312774506326239578318016984801869478851843\
85861560789112949495459501737958331952853208805511\
12540698747158523863050715693290963295227443043557\
66896648950445244523161731856403098711121722383113\
62229893423380308135336276614282806444486645238749\
30358907296290491560440772390713810515859307960866\
70172427121883998797908792274921901699720888093776\
65727333001053367881220235421809751254540594752243\
52584907711670556013604839586446706324415722155397\
53697817977846174064955149290862569321978468622482\
83972241375657056057490261407972968652414535100474\
82166370484403199890008895243450658541227588666881\
16427171479924442928230863465674813919123162824586\
17866458359124566529476545682848912883142607690042\
24219022671055626321111109370544217506941658960408\
07198403850962455444362981230987879927244284909188\
84580156166097919133875499200524063689912560717606\
05886116467109405077541002256983155200055935729725\
71636269561882670428252483600823257530420752963450"
// console.log(problem8(n));


// (a * a) + (b * b) = (c * c)
// a + b + c = 1000
// a = (1000 * 1000 - 2000 * b) / (2000 - 2 * b)

function problem9() {
  for (var b = 1; b < 500; b++) {
    if (1000 * (500 - b) % (1000 - b) === 0) {
      a = 1000 * (500 - b) / (1000 - b);
      c = 1000 - a - b;
      return a * b * c;
    }
  }
}
// console.log(problem9());

function problem10() {
  var primes = [2];
  var sum = 0;
  while (primes[primes.length - 1] < 2000000) {
    sum += primes[primes.length - 1];
    primes.push(nextPrime(primes));
  }

  return sum;
}
// console.log(problem10()); // 142913828922