function solution(A) {
    const set = new Set();

    // Add all positive integers from the array to the set
    for (let i = 0; i < A.length; i++) {
        if (A[i] > 0) {
            set.add(A[i]);
        }
    }

    // Find the smallest positive integer not in the set
    let smallestInt = 1;
    while (set.has(smallestInt)) {
        smallestInt++;
    }

    return smallestInt;
}
