// https://school.programmers.co.kr/learn/courses/30/lessons/181831?language=javascript

// n × n 크기의 이차원 배열 arr이 매개변수로 주어질 때,
// arr이 다음을 만족하면 1을 아니라면 0을 return 하는 solution 함수를 작성해 주세요.


function solution(arr) {

    // arr[0][1] === arr[1][0]
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i][j] !== arr[j][i]) {
                // console.log(i, j, arr[i][j], j,i,arr[j][i]);
                return 0;
            }
        }
    }

    return 1;
}

console.log(solution([[5, 192, 33], [192, 72, 95], [33, 95, 999]]));	                                    // 1
console.log(solution([[19, 498, 258, 587], [63, 93, 7, 754], [258, 7, 1000, 723], [587, 754, 723, 81]]));	// 0