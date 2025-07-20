// https://school.programmers.co.kr/learn/courses/30/lessons/120830?language=javascript

//머쓱이네 양꼬치 가게는 10인분을 먹으면 음료수 하나를 서비스로 줍니다. 양꼬치는 1인분에 12,000원, 음료수는 2,000원입니다.
// 정수 n과 k가 매개변수로 주어졌을 때,
// 양꼬치 n인분과 음료수 k개를 먹었다면 총얼마를 지불해야 하는지 return 하도록 solution 함수를 완성해보세요.

function solution(n, k) {
    let a = (n / 10) - (n / 10) % 1;

    const answer = n * 12000 + ((k - a) * 2000);

    return answer;
}

console.log(solution(64, 6)); //	768,000
console.log(solution(10, 3)); //	124,000
