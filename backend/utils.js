// utils.js

/**
 * Check if a number is prime.
 * @param {number} num - The number to check.
 * @returns {boolean} - Returns true if the number is prime, false otherwise.
 */
const isPrime = (num) => {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
  
    let i = 5;
    while (i * i <= num) {
      if (num % i === 0 || num % (i + 2) === 0) return false;
      i += 6;
    }
    return true;
  };
  
  /**
   * Get the Fibonacci number at a specific index.
   * @param {number} n - The index of the Fibonacci sequence.
   * @returns {number} - The Fibonacci number at index n.
   */
  const getFibonacci = (n) => {
    if (n < 0) throw new Error('Index must be a non-negative integer');
    if (n === 0) return 0;
    if (n === 1) return 1;
  
    let a = 0, b = 1;
    for (let i = 2; i <= n; i++) {
      [a, b] = [b, a + b];
    }
    return b;
  };
  
  module.exports = { isPrime, getFibonacci };
  