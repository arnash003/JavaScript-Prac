// Help me out with this one. 
// We consider a string which is created by repeating the sting "+--". 
// Write a function solution that, given an integer N, returns the first N characters of this string. You can assume N is between 1 and 200. Examples: 1. Given N=5, the function should return "+--+-" 2. Given N = 7, the function should return "+--+--+" 

function solution(N) {
    const pattern = '+--';
    const repeatedPattern = pattern.repeat(Math.ceil(N / pattern.length));
    return repeatedPattern.substring(0, N);
}

console.log(solution(5)); // Should return "+--+-"
console.log(solution(7)); // Should return "+--+--+"
