// https://school.programmers.co.kr/learn/courses/30/lessons/120849?language=javascript

// 영어에선 a, e, i, o, u 다섯 가지 알파벳을 모음으로 분류합니다.
// 문자열 my_string이 매개변수로 주어질 때 모음을 제거한 문자열을 return하도록 solution 함수를 완성해주세요.

// my_string은 소문자와 공백으로 이루어져 있습니다.
// 1 ≤ my_string의 길이 ≤ 1,000

function solution(my_string) {
    let answer = '';
    let arr = ["a", "e", "i", "o", "u"];
    let arr2 = my_string.split("");

    for (let i = 0; i < arr2.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            // console.log(my_string[i], arr[j]);
            if (arr2[i] === arr[j]) {
                // console.log(arr2[i]);
                // console.log(arr[j]);
                arr2 = arr2.filter((i) => i !== arr[j]);
                // console.log(arr2);

            }
        }
    }

    // console.log(arr2.toString());
    return arr2.toString().replace(/,/g, '');

}

console.log(solution("bus"));	                // "bs"
console.log(solution("nice to meet you")); 	// "nc t mt y"
