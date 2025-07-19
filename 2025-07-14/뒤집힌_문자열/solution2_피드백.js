// https://school.programmers.co.kr/learn/courses/30/lessons/120822?language=javascript

function solution(s) {
    let answer = '';

    for (let i = 0; i < s.length; i++) {
        const j = s.length - 1 - i;
        console.log(i, j);
        // answer = answer + s[j];
        answer += s[j];
    }

    return answer;
}


console.log(solution("jaron")); // "noraj"
// console.log(solution("bread")); // "daerb"
