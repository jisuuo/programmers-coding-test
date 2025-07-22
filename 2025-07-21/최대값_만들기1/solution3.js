// https://school.programmers.co.kr/learn/courses/30/lessons/120847?language=javascript

// 정수 배열 numbers가 매개변수로 주어집니다. numbers의 원소 중 두 개를 곱해 만들 수 있는
// 최댓값을 return하도록 solution 함수를 완성해주세요.

// 0 ≤ numbers의 원소 ≤ 10,000
// 2 ≤ numbers의 길이 ≤ 100


function solution(numbers) {
    let max = 0;
    let secondMax = 0;

    max = Math.max.apply(null, numbers);
    // console.log(max);

    for (let i = 0; i <= numbers.length; i++) {
        if (numbers[i] === max) {
            // console.log(max);
            // console.log(numbers[i]);
            secondMax = numbers.splice(i, 1);
        }
    }
    secondMax = Math.max.apply(null, numbers);
    // console.log(secondMax);

    return max * secondMax;
}


console.log(solution([1, 2, 3, 4, 5]));	     // 20
console.log(solution([0, 31, 24, 10, 1, 9]));	 // 744