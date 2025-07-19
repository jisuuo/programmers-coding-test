// https://school.programmers.co.kr/learn/courses/30/lessons/120910?language=javascript

// 어떤 세균은 1시간에 두배만큼 증식한다고 합니다. 처음 세균의 마리수 n과 경과한 시간 t가 매개변수로 주어질 때
// t시간 후 세균의 수를 return하도록 solution 함수를 완성해주세요.

function solution(n, t) {
    let arr = [];
    let answer = 1 * n;

    // 2를 10번 곱한다는건...?
    //
    //     2를 10 번 곱한다?
    //
    //     어떻게 2를 10번 곱하지?
    //
    //     2 * 2 * 2 * 2 * 2 * 2 * 2 * 2

    for (let i = 1; i < t + 1; i++) {

        n을 3개 연속

        t = 3
        n을 t만큼 곱하게 한다

        
        n * n * n


        // console.log(answer);
        // answer *= i;
        // console.log(answer, i);

        console.log(n *= i);

        // 반복을 통해 2를 계속 붙일 수 있는방법..?



        // 2가 1번 2 n
        // 2가 2번 2 2 n * n
        // 2가 3번 2 2 2 n * n * n
        // console.log(n *= i);

        // 2 * 2 * 2 * 2 * 2 * 2 * 2 * 2
        //
        // 1 * 2
        //
        // 2를 10번 곱함
        // 2를 10번 곱한다는건...... 2가 2222222이렇게 붙어야하는데
        //
        //
        // 2                          1
        // 2 * 2                      2
        // 2 * 2 * 2                  3
        // 2 * 2 * 2 * 2              4
        // 2 * 2 * 2 * 2 * 2          5
        // 2 * 2 * 2 * 2 * 2 * 2      6

    }

    // console.log(arr);




    return answer;
}

console.log(solution(2,	10));	//2048
console.log(solution(7,	15));	//229,376