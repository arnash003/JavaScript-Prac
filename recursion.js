

function factorial(n) {
    if (n === 0 || n === 1) {  // Base case
        return 1;
    } else {
        return n * factorial(n - 1);  // Recursive case
    }
}

console.log(factorial(5));

const str = "hello"

function solution(str) {
    //base case 
    if (str.length === 0) return "";

    //recursion
    return str[str.length - 1] +
        solution(str.slice(0, str.length - 1))
}

console.log(solution(str)); 