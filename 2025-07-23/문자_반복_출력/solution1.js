// https://school.programmers.co.kr/learn/courses/30/lessons/120825?language=javascript

// 문자열 my_string과 정수 n이 매개변수로 주어질 때,
// my_string에 들어있는 각 문자를 n만큼 반복한 문자열을 return 하도록 solution 함수를 완성해보세요.

function combine(char, range) {
    let answer = '';
    for (let i = 0; i < range; i++) {
        answer += char
    }
    // console.log(answer);
    return answer;
}


function solution(my_string, n) {
    let answer = '';
    let arr = [...my_string];

    // console.log(arr);
    arr.map((item) => {
        answer += combine(item, n);

    })
    // console.log(answer);
    return answer;
}

console.log(solution("hello", 3));	 // "hhheeellllllooo"