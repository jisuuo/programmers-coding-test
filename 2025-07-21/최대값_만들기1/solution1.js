// https://school.programmers.co.kr/learn/courses/30/lessons/120847?language=javascript

// 정수 배열 numbers가 매개변수로 주어집니다. numbers의 원소 중 두 개를 곱해 만들 수 있는
// 최댓값을 return하도록 solution 함수를 완성해주세요.

// 0 ≤ numbers의 원소 ≤ 10,000
// 2 ≤ numbers의 길이 ≤ 100


function solution(numbers) {
    let answer = 0;
    let result = 0;

    for (let i = 0; i < numbers.length; i++) {
        for (let j = 0; j < numbers.length; j++) {
            if (i !== j) {   // 자기를 곱하면 안되서 조건
                // console.log(numbers[i], numbers[j], numbers[i] * numbers[j]);
                result = numbers[i] * numbers[j];
                if (answer < result) {  // 기존 값보다 클 경우 다시 재할당
                    answer = result;
                }
            }

        }
    }

    return answer;
}


console.log(solution([1, 2, 3, 4, 5]));	     // 20
console.log(solution([0, 31, 24, 10, 1, 9]));	 // 744