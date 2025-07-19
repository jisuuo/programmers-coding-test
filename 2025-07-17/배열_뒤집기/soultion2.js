// https://school.programmers.co.kr/learn/courses/30/lessons/120821?language=javascript

// 정수가 들어 있는 배열 num_list가 매개변수로 주어집니다.
// num_list의 원소의 순서를 거꾸로 뒤집은 배열을 return하도록 solution 함수를 완성해주세요.

function solution(num_list) {
    var answer = [];
    let a = '';

    for (let i = 0; i < num_list.length; i++) {
        const j = num_list.length - i - 1;

        a += num_list[j]; // 타입이 스트링
        // console.log(typeof a);
        answer = [...a]; // 스트링을 배열로 푸시

    }

    return answer;
}


console.log(solution([1, 2, 3, 4, 5])); 	    // [5, 4, 3, 2, 1]
console.log(solution([1, 1, 1, 1, 1, 2])); 	    // [2, 1, 1, 1, 1, 1]
console.log(solution([1, 0, 1, 1, 1, 3, 5]));	// [5, 3, 1, 1, 1, 0, 1]