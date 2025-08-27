// https://school.programmers.co.kr/learn/courses/30/lessons/181849?language=javascript

// 한 자리 정수로 이루어진 문자열 num_str이 주어질 때,
// 각 자리수의 합을 return하도록 solution 함수를 완성해주세요.

function solution(num_str) {

    // let sum = num_str.split("").reduce((a, b) => Number(a) + Number(b) , 0);
    // console.log(typeof sum);
    return num_str.split("").reduce((a, b) => Number(a) + Number(b) , 0);
}

console.log(solution("123456789"));	 // 45
console.log(solution("1000000"));	 // 1