// https://school.programmers.co.kr/learn/courses/30/lessons/120908?language=javascript

// 문자열 str1, str2가 매개변수로 주어집니다.
// str1 안에 str2가 있다면 1을 없다면 2를 return하도록 solution 함수를 완성해주세요.


function solution(str1, str2) {
    let countUp = 0;
    let answer = '';
    // str1 0에서 str2.length 만큼 비교 후
    // str1 1에서 str2.length 만큼 비교
    // 비교하는 값이 하나라도 일치한다면 return

    for (let i = 0; i < str1.length; i++) {
        // console.log(i, str2.length + count);
        // console.log(str1.slice(i, str2.length + count));
        answer = str1.slice(i, str2.length + countUp);

        if (answer === str2) {
            return 1;
        }

        countUp++;

    }

    return 2;

}


// str2갯수만큼 연속 비교

console.log(solution("ab6CDE443fgh22iJKlmn1o", "6CD"));	 // 1
console.log(solution("ppprrrogrammers", "pppp"));	         // 2
console.log(solution("AbcAbcA", "AAA"));	                 // 2