// https://school.programmers.co.kr/learn/courses/30/lessons/120841?language=javascript

// x 좌표와 y 좌표가 모두 양수이면 제1사분면에 속합니다.
// x 좌표가 음수, y 좌표가 양수이면 제2사분면에 속합니다.
// x 좌표와 y 좌표가 모두 음수이면 제3사분면에 속합니다.
// x 좌표가 양수, y 좌표가 음수이면 제4사분면에 속합니다.


function solution(dot) {
    let x = 0;
    let y = 0;

    for (let i = 0; i < dot.length; i++) {
        if (i !== dot.length - 1) { // 마지막 인덱스일 경우
            x = dot[i];
        } else {                    // 마지막 인덱스가 아닐 경우
            y = dot[i];
        }

    }

    // console.log(x, y);
    // console.log(x && y > 0 ? 1 : x < 0 && y > 0 ? 2 : x && y < 0 ? 3 : 4);≈
    return x >0 && y > 0 ? 1 : x < 0 && y > 0 ? 2 : x && y < 0 ? 3 : 4;


}

console.log(solution([2, 4]));      // 1
console.log(solution([-7, 9]));	// 2