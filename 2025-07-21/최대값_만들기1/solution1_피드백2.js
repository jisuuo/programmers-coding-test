// https://school.programmers.co.kr/learn/courses/30/lessons/120847?language=javascript

// 정수 배열 numbers가 매개변수로 주어집니다. numbers의 원소 중 두 개를 곱해 만들 수 있는
// 최댓값을 return하도록 solution 함수를 완성해주세요.

// 0 ≤ numbers의 원소 ≤ 10,000
// 2 ≤ numbers의 길이 ≤ 100


function solution(numbers) {
    let answer = 0;

    const arr = [];
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            // console.log(i, j, numbers[i], numbers[j]);
            arr.push(numbers[i] * numbers[j]);
        }
    }

    // max
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        if (result < arr[i]) {
            result = arr[i];
        }
    }

    return answer;
}


console.log(solution([1, 2, 3, 4, 5]));	     // 20
console.log(solution([0, 31, 24, 10, 1, 9]));	 // 744