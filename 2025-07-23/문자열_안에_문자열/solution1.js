// https://school.programmers.co.kr/learn/courses/30/lessons/120908?language=javascript

// 문자열 str1, str2가 매개변수로 주어집니다.
// str1 안에 str2가 있다면 1을 없다면 2를 return하도록 solution 함수를 완성해주세요.

function comparisonValue(str1, str2) {
    let nextIndex = str2.length;
    const arr = [];

    for (let i = 0; i < str1.length; i++) {
        // console.log(str1.slice(i, nextIndex));
        arr.push(str1.slice(i, nextIndex));
        // console.log(arr);
        nextIndex++;
    }

    // console.log(arr);

    return arr;
}

function solution(str1, str2) {
    const arr = comparisonValue(str1, str2);
    const arr2 = arr.filter(x => x === str2);

    return arr2.length >= 1 ? 1 : 2; // 일치하는게 1개이상이라도 있으면 1반환 / 아닐경우 2반환
}


// 인덱스 0부터 3개씩 잘라서 비교
// 인덱스 0부터 4개씩 잘라서 비교
// 인덱스 0부터 3개씩 잘라서 비교

console.log(solution("ab6CDE443fgh22iJKlmn1o", "6CD"));	 // 1
console.log(solution("ppprrrogrammers", "pppp"));	         // 2
console.log(solution("AbcAbcA", "AAA"));	                 // 2