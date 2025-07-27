// https://school.programmers.co.kr/learn/courses/30/lessons/181877?language=javascript

// 알파벳으로 이루어진 문자열 myString이 주어집니다. 모든 알파벳을 대문자로 변환하여 return 하는 solution 함수를 완성해 주세요.

function solution(myString) {
    let arr = []; // 결과를 담을 빈 배열 생성

    for (let i = 0; i < myString.length; i++) {
        if (myString[i] === myString[i].toLowerCase()) {
            arr.push(myString[i].toUpperCase());
        } else {
            arr.push(myString[i]);
        }
    }

    return arr.join("");

}


console.log(solution("aBcDeFg"));	// "ABCDEFG"
console.log(solution("AAA"));	    // "AAA"