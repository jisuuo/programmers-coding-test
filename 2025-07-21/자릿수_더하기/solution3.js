// https://school.programmers.co.kr/learn/courses/30/lessons/120906?language=javascript

// 정수 n이 매개변수로 주어질 때 n의 각 자리 숫자의 합을 return하도록 solution 함수를 완성해주세요

function solution(n) {
    let answer = 0;

    // TODO 숫자를 문자로, 문자를 숫자로 변환할 때 String, Number를 사용하지 말고
    // 아스키 코드 사용!
    const a = n.toString().split("");
    for (let i = 0; i < a.length; i++) {
        answer += Number(a[i]);
    }

    return answer;
}

console.log(solution(1234));	    // 10
console.log(solution(930211));	// 16