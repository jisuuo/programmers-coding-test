// https://school.programmers.co.kr/learn/courses/30/lessons/181899?language=javascript

// 정수 start_num와 end_num가 주어질 때,
// start_num에서 end_num까지 1씩 감소하는 수들을 차례로 담은 리스트를 return하도록 solution 함수를 완성해주세요.

function solution(start_num, end_num) {
    let arr =[];

    for (let i = 1; i < start_num + 1; i++) {
        arr.push(i);
    }

    return arr.sort((a, b) => b - a).splice(0, start_num - end_num + 1);

}

console.log(solution(10, 3));	// [10, 9, 8, 7, 6, 5, 4, 3]