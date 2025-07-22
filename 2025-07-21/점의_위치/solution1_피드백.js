// https://school.programmers.co.kr/learn/courses/30/lessons/120841?language=javascript

// x 좌표와 y 좌표가 모두 양수이면 제1사분면에 속합니다.
// x 좌표가 음수, y 좌표가 양수이면 제2사분면에 속합니다.
// x 좌표와 y 좌표가 모두 음수이면 제3사분면에 속합니다.
// x 좌표가 양수, y 좌표가 음수이면 제4사분면에 속합니다.


function solution(dot) {
    // const x = dot[0];
    // const y = dot[1];

    // 구조분해할당
    const [x, y] = dot;
    // console.log(num1, num2);

    if (x > 0 && y > 0) {
        return 1;
    } else if (x < 0 && y > 0) {
        return 2;
    } else if (x < 0 && y < 0) {
        return 3;
    } else if (x > 0 && y < 0) {
        return 4;
    }

}

console.log(solution([2, 4]));      // 1
console.log(solution([-7, 9]));	// 2