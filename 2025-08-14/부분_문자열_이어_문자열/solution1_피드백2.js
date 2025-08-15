// https://school.programmers.co.kr/learn/courses/30/lessons/181911

// 길이가 같은 문자열 배열 my_strings와 이차원 정수 배열 parts가 매개변수로 주어집니다.
// parts[i]는 [s, e] 형태로, my_string[i]의 인덱스 s부터 인덱스 e까지의 부분 문자열을 의미합니다.
// 각 my_strings의 원소의 parts에 해당하는 부분 문자열을 순서대로 이어 붙인 문자열을 return 하는 solution 함수를 작성해 주세요.

function pair(arr1, arr2) {
    const answer = [];

    for (let i = 0; i < arr1.length; i++) {
        answer.push([arr1[i], arr2[i]]);
    }

    return answer;
}

function solution(my_string, parts) {
    const arr = pair(my_string, parts);
    console.log('arr', arr);

    return arr
        .map(x => {
            const word = x[0];
            const [s, e] = x[1];
            return word.slice(s, e + 1);
        })
        .join('');
}

console.log(solution(["progressive", "hamburger", "hammer", "ahocorasick"], [[0, 4], [1, 2], [3, 5], [7, 7]]));
// "programmers"