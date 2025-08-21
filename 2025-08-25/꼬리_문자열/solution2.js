// https://school.programmers.co.kr/learn/courses/30/lessons/181841?language=javascript

// 문자열들이 담긴 리스트가 주어졌을 때, 모든 문자열들을 순서대로 합친 문자열을 꼬리 문자열이라고 합니다.
// 꼬리 문자열을 만들 때 특정 문자열을 포함한 문자열은 제외시키려고 합니다. 예를 들어 문자열 리스트 ["abc", "def", "ghi"]가 있고 문자열 "ef"를 포함한 문자열은 제외하고 꼬리 문자열을 만들면 "abcghi"가 됩니다.
// 문자열 리스트 str_list와 제외하려는 문자열 ex가 주어질 때, str_list에서 ex를 포함한 문자열을 제외하고 만든 꼬리 문자열을 return하도록 solution 함수를 완성해주세요.

function solution(str_list, ex) {
    let str = str_list.join("");
    let answer = "";

    // console.log(str_list[0].slice(0, ex.length));

    for (let i = 0; i < str.length; i++) {
        console.log(str.slice(i, ex.length + i));
        if (str.slice(i, ex.length + i) === ex) {
            answer += str.slice(i, ex.length + i);
            // console.log(answer);
            return true;
        }
    }
    
    return str.filter(item => console.log(item));
}


// index0, index1 비교, index1, index2 비교
console.log(solution(["abc", "def", "ghi"], "ef"));	 // "abcghi"
// console.log(solution(["abc", "bbc", "cbc"], "c"));	 // ""