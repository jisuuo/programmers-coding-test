// https://school.programmers.co.kr/learn/courses/30/lessons/120819?language=javascript

// 머쓱이는 추운 날에도 아이스 아메리카노만 마십니다. 아이스 아메리카노는 한잔에 5,500원입니다.
// 머쓱이가 가지고 있는 돈 money가 매개변수로 주어질 때,
// 머쓱이가 최대로 마실 수 있는 아메리카노의 잔 수와 남는 돈을 순서대로 담은 배열을 return 하도록 solution 함수를 완성해보세요.


const americano = 5500;

function calculationChange(money) {
    for (let i = 0; ; i++) {
        money -= americano;
        // console.log(money);
        if (money < americano) {
            break;
        }
    }

    return money;

}

function calculationCount(money) {
    let count = 0;

    for (let i = 0; ; i++) {
        money -= americano;
        if (money < 0) {
            break;
        } else {
            count++;
        }
    }

    return count;

}

function solution(money) {
    let answer = [];

    // 가지고 있는돈에서 잔돈을 반복하여 빼고
    // 잔돈보다 가진 돈이 적으면 return

    const change = calculationChange(money);
    const count = calculationCount(money);
    // console.log(count, change);

    answer.push(count, change);

    return answer;

}

console.log(solution(5500));   	// [1, 0]
console.log(solution(15000));	// [2, 4000]