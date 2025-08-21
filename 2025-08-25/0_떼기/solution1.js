// https://school.programmers.co.kr/learn/courses/30/lessons/181847?language=javascript

// 정수로 이루어진 문자열 n_str이 주어질 때,
// n_str의 가장 왼쪽에 처음으로 등장하는 0들을 뗀 문자열을 return하도록 solution 함수를 완성해주세요.

function solution(n_str) {
    let answer = "";
    let str = [];


    // console.log(n_str.startsWith("0") ?  n_str.substring(1) : n_str);

    if (!n_str.startsWith("0")) {
        answer = n_str;
    }

    // console.log(n_str.startsWith("0"));

    // answer = n_str;
    // console.log(answer);
    // while (answer.startsWith("0")) {
    //     // console.log("true");
    //     // console.log( n_str.substring(1));
    //
    //     answer = n_str.substring(1);
    // }

    // console.log(answer);
    // answer = n_str.split("");
    //
    // for (let i = 0; i < answer.length; i++) {
    //     console.log(answer[i]);
    //     if (answer[0] === "0") {
    //         console.log("안됨?")
    //         str = answer.shift();
    //     }
    // }
    // console.log(str);

    str = n_str.split("");

    // console.log(str[0]);
    while (str[0] === "0") {
        // console.log("됨");
       str.shift();
    }
    // console.log(answer);

    return str.join("");

}

console.log(solution("0010"));	// "10"
console.log(solution("854020"));	// "854020"