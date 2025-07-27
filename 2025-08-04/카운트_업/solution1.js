// https://school.programmers.co.kr/learn/courses/30/lessons/181920?language=javascript

// 정수 start_num와 end_num가 주어질 때,
// start_num부터 end_num까지의 숫자를 차례로 담은 리스트를 return하도록 solution 함수를 완성해주세요.

function solution(start_num, end_num) {
    let answer = [];
    for (let i = start_num; i < end_num + 1; i++) {
        answer.push(i);
    }
    return answer;
}


console.log(solution(3, 10));	// [3, 4, 5, 6, 7, 8, 9, 10]