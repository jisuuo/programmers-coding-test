// https://school.programmers.co.kr/learn/courses/30/lessons/120825?language=javascript

// 문자열 my_string과 정수 n이 매개변수로 주어질 때,
// my_string에 들어있는 각 문자를 n만큼 반복한 문자열을 return 하도록 solution 함수를 완성해보세요.
function combine(char, n) {
    let answer = "";


    for (let i = 1; i < n + 1; i++) {

        answer += char;
        // console.log(answer);
        // answer = char + char;
        // console.log(char);
        // console.log(i, char);
        // answer += answer.concat("");
        // console.log(answer);
    }

    return answer;

}


function solution(my_string, n) {
    let result = '';

    for (let i = 0; i < my_string.length; i++) {
        // console.log(my_string.charAt(i));
        result += combine(my_string[i], n);
    }

    return result;
}

console.log(solution("hello", 3));	 // "hhheeellllllooo"