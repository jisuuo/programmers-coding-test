// https://school.programmers.co.kr/learn/courses/30/lessons/181850?language=javascript

// 실수 flo가 매개 변수로 주어질 때,
// flo의 정수 부분을 return하도록 solution 함수를 완성해주세요.


function solution(flo) {
    let answer = 0;

    while (flo >= 1) {
        flo -= 1;

        answer += 1;
    }

    return answer;
}

console.log(solution(1.42));	// 1
console.log(solution(69.32));   // 69