// There are N boxes (numbered from 0 to N-1) arranged in a row. 
// The K-th box contains A[K} bricks. 
// In one move you can take one brick from some box and move it to a box next to it(on the left or on the right). What is the minimum number of moves needed to end up with exactly 10 bricks in every box? Write a function: function solution(A), that given an array A of N integers, returns the minimum number of moves needed to end up with exactly 10 bricks in every box. If this is not possible, the function should return -1. For example: 1. For A=[7,15,10,8], the function should return 7. You can perform the following sequence of moves : -move three bricks from box number 1 to the box on the left [10,12,10,8] - move two bricks from box number 1 to the box on the right: [10,10, 12, 8] , - finally, move two bricks from box number 2 to the last box: [10, 10, 10, 10]. 

function solution(A) {
    const totalBricks = A.reduce((acc, val) => acc + val, 0);
    const N = A.length;

    // If the total number of bricks is not a multiple of 10, return -1
    if (totalBricks % 10 !== 0 || totalBricks < 10 * N) {
        return -1;
    }

    let moves = 0;

    for (let i = 0; i < N; i++) {
        // Calculate the deficit or excess in each box
        let diff = A[i] - 10;
        if (diff !== 0) {
            // Move the excess to the next box
            A[i + 1] += diff;
            moves += Math.abs(diff);
        }
    }

    return moves;
}
