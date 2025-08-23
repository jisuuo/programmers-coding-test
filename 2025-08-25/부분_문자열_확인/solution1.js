// https://school.programmers.co.kr/learn/courses/30/lessons/181843?language=javascript

// 부분 문자열이란 문자열에서 연속된 일부분에 해당하는 문자열을 의미합니다.
// 예를 들어, 문자열 "ana", "ban", "anana", "banana", "n"는 모두 문자열 "banana"의 부분 문자열이지만, "aaa", "bnana", "wxyz"는 모두 "banana"의 부분 문자열이 아닙니다.
// 문자열 my_string과 target이 매개변수로 주어질 때, target이 문자열 my_string의 부분 문자열이라면 1을, 아니라면 0을 return 하는 solution 함수를 작성해 주세요.

function solution(my_string, target) {
    let sliceEnd = target.length;


    for (let i = 0; i < my_string.length; i++) {
        // console.log(my_string.slice(i, sliceEnd));
        if (my_string.slice(i, sliceEnd) === target) {
            return 1;
        }
        // console.log(sliceEnd);
        sliceEnd++;
        // console.log(sliceEnd);
    }

    return 0;
}

console.log(solution("banana", "ana"));	  // 1
console.log(solution("banana", "wxyz"));  // 0