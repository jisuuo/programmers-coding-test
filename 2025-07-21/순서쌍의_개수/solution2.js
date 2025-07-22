// https://school.programmers.co.kr/learn/courses/30/lessons/120836?language=javascript

// 순서쌍이란 두 개의 숫자를 순서를 정하여 짝지어 나타낸 쌍으로 (a, b)로 표기합니다.
// 자연수 n이 매개변수로 주어질 때 두 숫자의 곱이 n인 자연수 순서쌍의 개수를 return하도록 solution 함수를 완성해주세요.

function solution(n) {
    let count = 0;
    let arr = [];

    for (let i = 1; i < n + 1; i++) {
        arr.push(i);
    }

    arr.forEach((element) => {
        arr.forEach((element2) => {
            // console.log(element, element2, element * (element2));
            if (element * element2 === n) {
                // console.log(element, element2);
                count++;
            }
        })
    })

    return count;

}

console.log(solution(20));     //	6
console.log(solution(100));    //	9