// https://school.programmers.co.kr/learn/courses/30/lessons/181852?language=javascript

// 정수로 이루어진 리스트 num_list가 주어집니다.
// num_list에서 가장 작은 5개의 수를 제외한 수들을 오름차순으로 담은 리스트를 return하도록 solution 함수를 완성해주세요.


function sort(arr) {
    let sortArr = [arr[0]];
    let answer = [];

    // console.log(sortArr);

    for (let i = 0; i < arr.length; i++) {
        // console.log(arr[i]);
        // console.log(sortArr[i], arr[i + 1]);
        if (sortArr[i] > arr[i + 1]) {
            // console.log('찍힘');
            // console.log(sortArr[i], arr[i + 1]);
            sortArr.unshift(arr[i + 1]);
        } else {
            sortArr.push(arr[i + 1]);
        }
        // sortArr.push();
    }
    // console.log(sortArr);
    return sortArr;
}

console.log(sort([12, 4, 15, 46, 38, 1, 14, 56, 32, 10]));

function solution(num_list) {


}

// console.log(solution([12, 4, 15, 46, 38, 1, 14, 56, 32, 10]));	// [15, 32, 38, 46, 56]