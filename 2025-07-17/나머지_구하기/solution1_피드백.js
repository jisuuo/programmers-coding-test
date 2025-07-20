// https://school.programmers.co.kr/learn/courses/30/lessons/120810?language=javascript

// 정수 num1, num2가 매개변수로 주어질 때, num1를 num2로 나눈 나머지를 return 하도록 solution 함수를 완성해주세요.
function solution(num1, num2) {
    while (num1 >= num2) {
        num1 -= num2
    }

    return num1;
}

console.log(solution(3,2));      // 1
console.log(solution(12,6));     //	0

// console.log(a > b);
// console.log(a <= b);