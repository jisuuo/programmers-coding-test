// https://school.programmers.co.kr/learn/courses/30/lessons/120805?language=javascript

// 정수 num1, num2가 매개변수로 주어질 때, num1을 num2로 나눈 몫을 return 하도록 solution 함수를 완성해주세요.
function solution(num1, num2) {
    const answer = String(num1 / num2);
    // '3.5'
    let s = '';

    for (let i = 0; i < answer.length; i++) {
        // console.log(i, answer[i]);
        if (answer[i] === '.') {
            break;
        }

        s += answer[i];
    }

    return Number(s);
}

// console.log(solution(10, 5));   // 2
console.log(solution(7, 2));   	 // 3

// '0' -> 아스키코드 -> 48 - 48 = 0