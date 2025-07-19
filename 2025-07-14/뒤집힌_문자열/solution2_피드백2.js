// https://school.programmers.co.kr/learn/courses/30/lessons/120822?language=javascript

function solution(s) {
    s = s.split('');
    s.reverse();

    return s.join('');
}


console.log(solution("jaron")); // "noraj"
// console.log(solution("bread")); // "daerb"
