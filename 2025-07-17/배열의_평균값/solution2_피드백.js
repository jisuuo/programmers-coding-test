// https://school.programmers.co.kr/learn/courses/30/lessons/120817?language=javascript

// 정수 배열 numbers가 매개변수로 주어집니다. numbers의 원소의 평균값을 return하도록 solution 함수를 완성해주세요.

function solution(numbers) {
    var answer = 0;
    var a = 0;

    if (numbers.length % 2 === 0) {
        for (let i = 0; i < ( numbers.length /2 ); i++) {
            const j = numbers.length - 1 - i;

            // console.log('앞에서부터', numbers[i]);
            // console.log('뒤에서부터', numbers[j]);

            answer += (numbers[i] + numbers[j]);
        }

        answer /= numbers.length;
    } else {
        // console.log(numbers.length % 2);
        a = Math.round((numbers.length - 1) / 2);  // 길이가 홀수인 경우 길이를 2로 나눈 인덱스에서 +1인 값은 값 두번 더하게 됨으로 그것이 평균값이 되는걸 발견

        answer += numbers[a];


    }

    return answer;

}

console.log(solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]));                //  5.5
console.log(solution([89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99]));	// 94.0

// 1,2,3,4,5,6,7,8,9,10,11,12,13
