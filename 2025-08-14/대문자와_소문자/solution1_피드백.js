// https://school.programmers.co.kr/learn/courses/30/lessons/120893?language=javascript

// 문자열 my_string이 매개변수로 주어질 때,
// 대문자는 소문자로 소문자는 대문자로 변환한 문자열을 return하도록 solution 함수를 완성해주세요.

function isLower(c) {
    // 스니펫
    const lower = 'abcdefghijklmnopqrstuvwxyz';

    for (let i = 0; i < lower.length; i++) {
        if (c === lower[i]) {
            return true;
        }
    }

    return false;
}

function isUpper(c) {
    // 스니펫
    const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    for (let i = 0; i < upper.length; i++) {
        if (c === upper[i]) {
            return true;
        }
    }

    return false;
}

// TODO 구현 완성하기 (isLower, toLowerCase)
function toUpperCase(c) {
    const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lower = 'abcdefghijklmnopqrstuvwxyz';

    if (isLower(c)) {
        // console.log(lower.indexOf(c));
        return upper[lower.indexOf(c)];
    }

    return c;
}

function toLowerCase(c) {
    const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lower = 'abcdefghijklmnopqrstuvwxyz';

    if (isUpper(c)) {
        console.log(upper.indexOf(c));
        return lower[upper.indexOf(c)];
    }

    return c;
}


console.log(toUpperCase('a'));
console.log(toLowerCase('a'));


function solution(s) {
    let answer = '';

    for (let i = 0; i < s.length; i++) {
        // console.log(s[i]);
        if (isLower(s[i])) {
            answer += s[i].toUpperCase();
        } else {
            answer += s[i].toLowerCase();
        }
    }

    return answer;
}

console.log(solution("cccCCC"));	    // "CCCccc"
console.log(solution("abCdEfghIJ"));	// "ABcDeFGHij"