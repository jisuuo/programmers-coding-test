// https://school.programmers.co.kr/learn/courses/30/lessons/120824?language=javascript

function solution(num_list) {
    let a = 0;
    let b = 0;

    for(let i = 0; i < num_list.length; i++) {
        const v = num_list[i];
        console.log('-', v, v % 2, v % 2 === 0);

        if(v % 2 === 0) {
            a += 1;
        } else {
            b += 1;
        }
    }

    return [a, b];
}

console.log(solution([1, 2, 3, 4, 5])); // [2, 3]
// console.log(solution([1, 3, 5, 7])); // [0, 4]