// https://school.programmers.co.kr/learn/courses/30/lessons/120585?language=javascript

// 머쓱이는 학교에서 키 순으로 줄을 설 때 몇 번째로 서야 하는지 궁금해졌습니다.
// 머쓱이네 반 친구들의 키가 담긴 정수 배열 array와 머쓱이의 키 height가 매개변수로 주어질 때,
// 머쓱이보다 키 큰 사람 수를 return 하도록 solution 함수를 완성해보세요.

// 1 ≤ array의 길이 ≤ 100
// 1 ≤ height ≤ 200
// 1 ≤ array의 원소 ≤ 200

function solution(array, height) {
    const answer = [];
    for (let i = 0; i < array.length; i++) {
        answer.push(array[i] > height ? 1 : 0);
    }

    let count = 0;
    for (let i = 0; i < answer.length; i++) {
        count += answer[i];
    }

    return count;
}

console.log(solution([149, 180, 192, 170], 167));	 // 3
console.log(solution([180, 120, 140], 190));	     // 0