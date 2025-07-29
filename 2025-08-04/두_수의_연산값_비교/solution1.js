// https://school.programmers.co.kr/learn/courses/30/lessons/181938?language=javascript

function calculation(a, b) {
    return 2 * a * b;
}

function solution(a, b) {
    let result1 = String(a) + String(b);
    let result2 = calculation(a, b);

    // console.log(result1);
    // console.log(result2);

    return result1 > result2 ? result1 : result2;
}

console.log(solution(2, 91));	    // 364
console.log(solution(91,	2)); 	// 912