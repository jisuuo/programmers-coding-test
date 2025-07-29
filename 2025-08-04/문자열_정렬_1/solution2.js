// https://school.programmers.co.kr/learn/courses/30/lessons/120850?language=javascript

// 문자열 my_string이 매개변수로 주어질 때,
// my_string 안에 있는 숫자만 골라 오름차순 정렬한 리스트를 return 하도록 solution 함수를 작성해보세요.
function sort(arr) {
    let value = arr[0];
    let answer = [];

    for (let i = 0; i < arr.length; i++) {
        if (value <= arr[i]) {
            console.log(value, arr[i]);
            answer.push(arr[i]);
        } else {
            console.log(arr[i]);
            answer.unshift(arr[i]);
        }

    }

    return answer;


}

function isNumber(value) {
    if (isNaN(value)) {
        return null;
    } else {
        return value;
    }
}

// console.log(sort([2, 3, -1]));


function solution(my_string) {

    const arr = my_string.split("").filter(x => x === isNumber(x));

    return sort(arr);

}

console.log(solution("hi12392"));	    // [1, 2, 2, 3, 9]
// console.log(solution("p2o4i8gj2"));	// [2, 2, 4, 8]
// console.log(solution("abcde0"));	    // [0]