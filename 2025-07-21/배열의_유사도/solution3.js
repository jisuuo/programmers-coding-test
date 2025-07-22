// https://school.programmers.co.kr/learn/courses/30/lessons/120903?language=javascript

// 두 배열이 얼마나 유사한지 확인해보려고 합니다.
// 문자열 배열 s1과 s2가 주어질 때 같은 원소의 개수를 return하도록 solution 함수를 완성해주세요.

function concat() {
    // TODO 만들기
}


function solution(s1, s2) {
    let answer = [];

    answer = s1.concat(s2); // 배열1 + 배열2
    // console.log(answer);

    const set = new Set(); // 중복 제거위해 set 사용
    answer.map(item => set.add(item));

    // console.log(set.size);

    return answer.length - set.size; // 더해진 두개의 배열 길이 - set 길이
}

console.log(solution(["a", "b", "c"], ["com", "b", "d", "p", "c"]));	 // 2
console.log(solution(["n", "omg"], ["m", "dot"]));	                     // 0