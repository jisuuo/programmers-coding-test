// https://school.programmers.co.kr/learn/courses/30/lessons/120822?language=javascript

function solution(s) {
    let answer = '';


    for (let i = s.length - 1; i > -1; i--) {
        console.log('----', i, s[i], answer);
        answer = answer + s[i];

    }

    return answer;
}


console.log(solution("jaron")); // "noraj"
// console.log(solution("bread")); // "daerb"
