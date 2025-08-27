// https://school.programmers.co.kr/learn/courses/30/lessons/181849?language=javascript

// 한 자리 정수로 이루어진 문자열 num_str이 주어질 때,
// 각 자리수의 합을 return하도록 solution 함수를 완성해주세요.

function solution(num_str) {
    let splitArr = num_str.split("");
    let sum = 0;

    for (let i = 0; i < splitArr.length; i++) {
        // console.log(Number(splitArr[i]));
        sum += Number(splitArr[i]);
    }

    return sum;
}

console.log(solution("123456789"));	 // 45
console.log(solution("1000000"));	 // 1