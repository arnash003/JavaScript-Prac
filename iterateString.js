// There is a street described by a string S. 
// Each character in S is one of the following: "<" denotes the car going to the left. ">" denotes the car going to the right. "." denotes a speed camera. 
// Count the total number of times that cars pass by a speed camera. A car going to the left will pass every speed camera that is to the left of it, and similarly, a car going to the right will pass every speed camera to the right of it. Write a function: function solution(S);   that given a string S of length N, returns the total number of times that cars pass by a speed camera. Assume that: N is an integer within the range [1...100] and string S is made only of the following characters "<", ">", and/or ".". 

function solution(S) {
    let totalPasses = 0;

    // Count the passes for each car
    for (let i = 0; i < S.length; i++) {
        if (S[i] === '>') {
            // Count cameras to the right of this car
            for (let j = i + 1; j < S.length; j++) {
                if (S[j] === '.') {
                    totalPasses++;
                }
            }
        } else if (S[i] === '<') {
            // Count cameras to the left of this car
            for (let j = i - 1; j >= 0; j--) {
                if (S[j] === '.') {
                    totalPasses++;
                }
            }
        }
    }

    return totalPasses;
}
