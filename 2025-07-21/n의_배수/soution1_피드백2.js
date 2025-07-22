// https://school.programmers.co.kr/learn/courses/30/lessons/120905?language=javascript

// 정수 n과 정수 배열 numlist가 매개변수로 주어질 때,
// numlist에서 n의 배수가 아닌 수들을 제거한 배열을 return하도록 solution 함수를 완성해주세요.

function solution(f, numlist) {
    // const answer = numlist.filter(x => x % n === 0);

    const answer = [];

    for (let i = 0; i < numlist.length; i++) {
        if(f(numlist[i])) {
            answer.push(numlist[i]);
        }
    }

    return answer;
}

console.log(solution(x => x % 3 === 0, [4, 5, 6, 7, 8, 9, 10, 11, 12])); 	// [6, 9, 12]
console.log(solution(x => x % 5 === 0, [1, 9, 3, 10, 13, 5]));	            // [10, 5]
console.log(solution(x => x % 12 === 0, [2, 100, 120, 600, 12, 12]));       // [120, 600, 12, 12]