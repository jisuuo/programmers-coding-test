// https://school.programmers.co.kr/learn/courses/30/lessons/120897?language=javascript

// 정수 n이 매개변수로 주어질 때, n의 약수를 오름차순으로 담은 배열을 return하도록 solution 함수를 완성해주세요.

function solution(n) {
    let answer = [];
    let result = [];

    for (let i = 0; i < n + 1; i++) {
        answer.push(i);
        if(n % answer[i] === 0 && n > 0) {
            result.push(answer[i]);
        }
    }


    return result;
}

console.log(solution(24));	// [1, 2, 3, 4, 6, 8, 12, 24]
console.log(solution(29));	// [1, 29]