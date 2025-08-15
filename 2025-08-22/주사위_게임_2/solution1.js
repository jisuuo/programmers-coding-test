// https://school.programmers.co.kr/learn/courses/30/lessons/181930?language=javascript

// 1부터 6까지 숫자가 적힌 주사위가 세 개 있습니다. 세 주사위를 굴렸을 때 나온 숫자를 각각 a, b, c라고 했을 때 얻는 점수는 다음과 같습니다.
// 세 숫자가 모두 다르다면 a + b + c 점을 얻습니다.
// 세 숫자 중 어느 두 숫자는 같고 나머지 다른 숫자는 다르다면 (a + b + c) × (a2 + b2 + c2 )점을 얻습니다.
// 세 숫자가 모두 같다면 (a + b + c) × (a2 + b2 + c2 ) × (a3 + b3 + c3 )점을 얻습니다.
// 세 정수 a, b, c가 매개변수로 주어질 때, 얻는 점수를 return 하는 solution 함수를 작성해 주세요.

function multiply(num, n) {
    let result = num;

    for (let i = 1; i < n; i++) {
        // console.log(result, n);
        result *= num;
    }

    return result;
}

// console.log(multiply(4, 3));

function validate(a, b, c) {
    const answer = [a, b, c];
    let count = 0;

    for (let i = 0; i < answer.length; i++) {
        if (answer[i] === answer[i + 1]) {
            // console.log(count);
            count += 1;
        }
    }

    return count;
}

// console.log(validate(2, 6, 1));
// console.log(validate(5, 3, 3));
// console.log(validate(4, 4, 4));


function solution(a, b, c) {
    var answer = [a, b, c];

    // 먼저 세 수가 같은지 체크
    // console.log(answer);

    // a === b === c

    // if (a === b && b === c) {
    //     // console.log(a * a + b * b + c * c);
    //     return (a + b + c) * (multiply(a, 2) + multiply(b, 2) + multiply(c, 2)) * (multiply(a, 3) + multiply(b, 3) + multiply(c, 3));
    // }

    const count = validate(a, b, c);

    switch (count) {
        case 0:
            return a + b + c;
        case 1 :
            return (a + b + c) * (multiply(a, count + 1) + multiply(b, count + 1) + multiply(c, count + 1));
        case 2:
            return (a + b + c) * (multiply(a, count) + multiply(b, count) + multiply(c, count)) * (multiply(a, count + 1) + multiply(b, count + 1) + multiply(c, count +1));
        default:
            break;

    }

}

console.log(solution(2,	6,	1));  // 9
console.log(solution(5,	3,	3));	 // 473
console.log(solution(4, 4, 4));	 // 110592