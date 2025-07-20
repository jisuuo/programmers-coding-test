// https://school.programmers.co.kr/learn/courses/30/lessons/120806?language=javascript

// 정수 num1과 num2가 매개변수로 주어질 때, num1을 num2로 나눈 값에 1,000을 곱한 후
// 정수 부분을 return 하도록 solution 함수를 완성해주세요.

function solution(num1, num2) {
    let answer = (num1 / num2) * 1000;

    console.log("정수판별" , num1,  answer % 1 ===0);

    if(answer % 1 === 0) {   // 정수인지 확인하는 법
        return  answer;
    } else {
        return answer - (answer % 1); // 1로 나누어 나머지를 구하고 정수가 아닌 경우 나머지 빼기
    }

}

console.log(solution(3,	2));	//1500
console.log(solution(7,	3));	//2333
console.log(solution(1,	16));//	62