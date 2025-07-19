// https://school.programmers.co.kr/learn/courses/30/lessons/120822?language=javascript

function split(s) {
    const answer = [];

    for (let i = 0; i < s.length; i++) {
        answer.push(s[i]);
    }

    return answer;
}

function reverse(arr) {
    const answer = [];

    for (let i = 0; i < arr.length; i++) {
        const j = arr.length - 1 - i;
        answer.push(arr[j]);
    }

    // console.log('arr', arr);
    // console.log('answer', answer);
    return answer;
}

function join(arr) {
    let answer = '';

    // code
    for (let i = 0; i < arr.length; i++) {
        answer += arr[i];
    }

    return answer;
}

function solution(s) {
    console.log('1', s);
    s = split(s);
    console.log('2', s);
    s = reverse(s);
    // s.reverse();
    console.log('3', s);

    // 원본이 변하는 경우 VS 원본이 변하지 않는 경우

    return join(s);
}


console.log(solution("jaron")); // "noraj"
// console.log(solution("bread")); // "daerb"
