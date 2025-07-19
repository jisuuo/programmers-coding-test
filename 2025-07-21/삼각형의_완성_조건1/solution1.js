// https://school.programmers.co.kr/learn/courses/30/lessons/120889?language=javascript

// 선분 세 개로 삼각형을 만들기 위해서는 다음과 같은 조건을 만족해야 합니다.
// 가장 긴 변의 길이는 다른 두 변의 길이의 합보다 작아야 합니다.
// 삼각형의 세 변의 길이가 담긴 배열 sides이 매개변수로 주어집니다.
// 세 변으로 삼각형을 만들 수 있다면 1, 만들 수 없다면 2를 return하도록 solution 함수를 완성해주세요.

function solution(sides) {
    let max = 0;
    let sum = 0;
    let arr = [];

    for (let i = 0; i <sides.length; i++) {
        max = sides[i];

        if(max < sides[i]) {
            max = sides[i]
        }

        arr = sides.filter((x) => x !== max)
        // console.log(arr);

    }

    for (let j = 0; j < arr.length; j++) {
        sum += arr[j];

    }

    // console.log(sum);

    if(max < sum) {
        return  1
    }

    return  2;

}

console.log(solution([1, 2, 3]));	     // 2
console.log(solution([3, 6, 2]));	     // 2
console.log(solution([199, 72, 222])); //	1