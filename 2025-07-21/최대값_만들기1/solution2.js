// https://school.programmers.co.kr/learn/courses/30/lessons/120847?language=javascript

// 정수 배열 numbers가 매개변수로 주어집니다. numbers의 원소 중 두 개를 곱해 만들 수 있는
// 최댓값을 return하도록 solution 함수를 완성해주세요.

// 0 ≤ numbers의 원소 ≤ 10,000
// 2 ≤ numbers의 길이 ≤ 100


function solution(numbers) {
    let max = 0;
    let secondMax = 0;

    // 최초 최대값
    max = Math.max.apply(null, numbers);

    // 최대값 제외한 새로운 배열 생성
    numbers = numbers.filter((x) => x !== max);
    // console.log(max);

    // 두번째 최대값
    secondMax = Math.max.apply(null, numbers);
    // console.log(secondMax);

    return max * secondMax;
}


console.log(solution([1, 2, 3, 4, 5]));	     // 20
console.log(solution([0, 31, 24, 10, 1, 9]));	 // 744