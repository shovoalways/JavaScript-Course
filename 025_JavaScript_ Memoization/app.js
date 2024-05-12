/*
 * JavaScript Memoization
 */

/*
* square(n) Function:
? This is a simple function that takes a number n as input.
? It calculates the square of n by multiplying it by itself (n * n).
? It returns the calculated square value.
*/

function square(num) {
  if (typeof n !== 'number') {
    throw new TypeError('Input must be a number');
  } // I didn't explained in the video 🥲
  return num * num;
}

/*
 * Name: memoSqr()
? This function creates a closure to implement memoization (caching results).
? It initializes an empty object cache to store previously calculated squares.
? It returns an inner function optimizedSquare(num).
 */
function memoSqr() {
  // Outer Scope
  // Closure

  let cache = {};

  /*
* optimizedSrq(num) Function:
! This is the actual function that calculates and returns the square of a number num.
 ? It checks if num exists as a key in the cache object.
 ? If found:
 ? It logs a message indicating retrieval from cache.
 ? It returns the cached value directly, avoiding recalculation.
! If not found:
 ? It logs a message indicating square computation.
 ? It calls square(num) to calculate the square.
 ? It stores the calculated square (result) in the cache with num as the key.
 ? It returns the result.
*/
  return function optimizedSrq(num) {
    if (num in cache) {
      // Consider conditional logging based on environment
      console.log('Returning from Cache');
      console.log(cache);
      return cache[num];
    } else {
      const result = square(num);
      cache[num] = result;
      console.log('Computing Square');
      return result;
    }
  };
}

/*
*  Usage:

The memoizedSquare() function is called and assigned to the variable memoSuqare.
memoSquare(9999999999999999) is called twice to calculate the square of a very large number.
*/
const memoSuqare = memoSqr();

console.log(memoSuqare(4));
console.log(memoSuqare(4));
console.log(memoSuqare(4));
console.log(memoSuqare(5));
console.log(memoSuqare(99));
