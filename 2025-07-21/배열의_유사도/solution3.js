// https://school.programmers.co.kr/learn/courses/30/lessons/120903?language=javascript

// 두 배열이 얼마나 유사한지 확인해보려고 합니다.
// 문자열 배열 s1과 s2가 주어질 때 같은 원소의 개수를 return하도록 solution 함수를 완성해주세요.

function customStringConcat(s1, s2) {
    let answer = "";

    // TODO 만들기
    s1.forEach((x) => {
        answer += x + ",";
    })

    s2.forEach((y, index) => {
        // console.log(index);
        // console.log(s2.length);

        /// s1에 s2를 붙이기 때문에 s2마지막만 , 제거하면 됨

        if (index === s2.length - 1) {
            // console.log(index, s2.length - 1);
            answer += y;
        } else {
            answer += y + ",";
        }
    })

    // console.log(answer);
    return answer;

}


function customArrayConcat(s1, s2) {
    let answer = [];

    // TODO 만들기
    s1.forEach((x) => {
        answer.push(x);
    })

    // console.log(1, answer);

    s2.forEach((y, index) => {
        // console.log(index);
        // console.log(s2.length);

        /// s1에 s2를 붙이기 때문에 s2마지막만 , 제거하면 됨

        answer.push(y)

    })

    // console.log(answer);
    return answer;

}


function solution(s1, s2) {
    let answer = [];

    // answer = s1.concat(s2); // 배열1 + 배열2
    // let string = customStringConcat(s1, s2);
    answer = customArrayConcat(s1, s2);

    // console.log(string);
    // console.log(arr);
    // console.log(answer);


    const set = new Set(); // 중복 제거위해 set 사용
    answer.map(item => set.add(item));

    // console.log(set.size);

    return answer.length - set.size; // 더해진 두개의 배열 길이 - set 길이
}

console.log(solution(["a", "b", "c"], ["com", "b", "d", "p", "c"]));	 // 2
console.log(solution(["n", "omg"], ["m", "dot"]));	                     // 0