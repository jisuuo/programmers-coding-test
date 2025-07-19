// https://school.programmers.co.kr/learn/courses/30/lessons/120824?language=javascript

function solution(num_list) {
    var answer = [];
    int a = 0;
    int b = 0;
    for(let i = 0; i < num_list.length; i++) {
        if(i % 2 === 0) {
            a += 1;
        } else {
            b += 1;
        }
        answer = [a, b];
    }
    return answer;
}

console.log(solution([1, 2, 3, 4, 5])); // [2, 3]
console.log(solution([1, 3, 5, 7])); // [0, 4]