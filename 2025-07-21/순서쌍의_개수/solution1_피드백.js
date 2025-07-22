// https://school.programmers.co.kr/learn/courses/30/lessons/120836?language=javascript

// 순서쌍이란 두 개의 숫자를 순서를 정하여 짝지어 나타낸 쌍으로 (a, b)로 표기합니다.
// 자연수 n이 매개변수로 주어질 때 두 숫자의 곱이 n인 자연수 순서쌍의 개수를 return하도록 solution 함수를 완성해주세요.

{
    function solution(f, numlist) {
        // const answer = numlist.filter(x => x % n === 0);

        const answer = [];

        for (let i = 0; i < numlist.length; i++) {
            if (f(numlist[i])) {
                answer.push(numlist[i]);
            }
        }

        return answer;
    }

    // solution((x) => {
    //     console.log(x);
    //     if (x === 3) {
    //         break;
    //     }
    // })
}


function solution() {
    const arr = [1, 2, 3, 4, 5];

    for (let i = 0; i < arr.length; i++) {
        console.log(i, arr[i]);
        if (i === 3) {
            break;
        }
    }

    console.log('====================');

    arr.forEach((x, i) => {
        console.log(i, x);
        if (i === 3) {
            return;
        }
    });
}

solution();