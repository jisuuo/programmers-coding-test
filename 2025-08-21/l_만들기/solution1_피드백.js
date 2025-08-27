// https://school.programmers.co.kr/learn/courses/30/lessons/181834?language=javascript

// 알파벳 소문자로 이루어진 문자열 myString이 주어집니다.
// 알파벳 순서에서 "l"보다 앞서는 모든 문자를 "l"로 바꾼 문자열을 return 하는 solution 함수를 완성해 주세요.

function solution(myString) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    let result = "";
    const lIndex = alphabet.indexOf('l');

    for (let i = 0; i < myString.length; i++) {
        const ch = myString[i];
        const index = alphabet.indexOf(ch);

        if (index < lIndex) {
            result += 'l';
        } else {
            result += ch;
        }
    }

    return result;
}


console.log(solution("abcdevwxyz"));	// "lllllvwxyz"
console.log(solution("jjnnllkkmm"));	// "llnnllllmm"