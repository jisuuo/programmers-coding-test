// https://school.programmers.co.kr/learn/courses/30/lessons/181901?language=javascript

// 정수 n과 k가 주어졌을 때,
// 1 이상 n이하의 정수 중에서 k의 배수를 오름차순으로 저장한 배열을 return 하는 solution 함수를 완성해 주세요.

function solution(n, k) {

    const result = Array.from({length: n}, (v, index) => index + 1)
        .flatMap(item => item % k === 0 ? [item] : []);

    return result;
}

console.log(solution(10, 3));	 // [3, 6, 9]
console.log(solution(15, 5));	 // [5, 10, 15]

