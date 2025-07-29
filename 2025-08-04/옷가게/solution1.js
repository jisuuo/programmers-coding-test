// https://school.programmers.co.kr/learn/courses/30/lessons/120818?language=javascript

// 머쓱이네 옷가게는 10만 원 이상 사면 5%, 30만 원 이상 사면 10%, 50만 원 이상 사면 20%를 할인해줍니다.
// 구매한 옷의 가격 price가 주어질 때, 지불해야 할 금액을 return 하도록 solution 함수를 완성해보세요.

function discount(price) {
    if (price >= 500000) {
        return price * 0.8;
    } else if (price >= 300000) {
        return price * 0.9;
    } else if (price >= 100000) {
        return price * 0.95;
    }
}

function solution(price) {
    return discount(price);
}

console.log(solution(150000));	// 142,500
console.log(solution(580000));	// 464,000