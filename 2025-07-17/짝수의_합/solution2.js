// http://school.programmers.co.kr/learn/courses/30/lessons/120831?language=javascript

// 정수 n이 주어질 때, n이하의 짝수를 모두 더한 값을 return 하도록 solution 함수를 작성해주세요.

function solution(n) {
    let answer = 0;

    for (let i = 0; i <= (n / 2); i++) {
        //console.log('기존값', answer);
        answer += i * 2;
        // console.log('새로운값', answer);

    }

    return answer;
}

console.log(solution(10)); //	30 1,2,3,4,5,6,7,8,9,10 2,4,6,8,10 index +2 만큼
console.log(solution(4));  //	6