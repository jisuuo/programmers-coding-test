// https://school.programmers.co.kr/learn/courses/30/lessons/120814?language=javascript

//머쓱이네 피자가게는 피자를 일곱 조각으로 잘라 줍니다. 피자를 나눠먹을 사람의 수 n이 주어질 때,
//모든 사람이 피자를 한 조각 이상 먹기 위해 필요한 피자의 수를 return 하는 solution 함수를 완성해보세요.

function solution(n) {
    var answer = 0;
    var pizza = 7;
    var count = n / pizza;

    // 피자조각보다 적은 인원수라면 1판
    // 피자조각보다 많은 인원수라면 인원수 / 피자 + 1

    if (pizza > n) {
        return 1;
    } else if (pizza % n === 0) {
        answer = count;
    } else if (count % 1 !== 0) {  // 딱 나눠 떨어지지 않는다면 나머지를 빼고 +1
        answer = count + 1 - (count % 1);
    }

    return answer;
}

console.log(solution(7));	//1
console.log(solution(1));    //1
console.log(solution(15));	//3