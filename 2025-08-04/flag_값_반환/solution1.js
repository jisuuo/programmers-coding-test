// https://school.programmers.co.kr/learn/courses/30/lessons/181933?language=javascript

// 두 정수 a, b와 boolean 변수 flag가 매개변수로 주어질 때,
// flag가 true면 a + b를 false면 a - b를 return 하는 solution 함수를 작성해 주세요.

function solution(a, b, flag) {

    if (flag) {
        return a + b;
    } else {
        return a - b;
    }


}

console.log(solution(-4, 7, true));	// 3
console.log(solution(-4, 7, false));	// -11