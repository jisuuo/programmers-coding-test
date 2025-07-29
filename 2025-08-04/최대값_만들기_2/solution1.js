// https://school.programmers.co.kr/learn/courses/30/lessons/120862?language=javascript

// 정수 배열 numbers가 매개변수로 주어집니다.
// numbers의 원소 중 두 개를 곱해 만들 수 있는 최댓값을 return하도록 solution 함수를 완성해주세요.

function solution(numbers) {
    let answer = [];

    for (let i = 0; i < numbers.length; i++) {
        for (let j = 0; j < numbers.length; j++) {
            if (i !== j) {
                answer.push(numbers[i] * numbers[j]);

            }
            // console.log(numbers[i], numbers[i] * numbers[j]);
        }
    }

    // return answer;
    return Math.max(...answer);
}

console.log(solution([1, 2, -3, 4, -5]));	        // 15
console.log(solution([0, -31, 24, 10, 1, 9]));	    // 240
console.log(solution([10, 20, 30, 5, 5, 20, 5]));	// 600