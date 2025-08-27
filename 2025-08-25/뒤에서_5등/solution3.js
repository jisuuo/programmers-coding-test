// https://school.programmers.co.kr/learn/courses/30/lessons/181852?language=javascript

// 정수로 이루어진 리스트 num_list가 주어집니다.
// num_list에서 가장 작은 5개의 수를 제외한 수들을 오름차순으로 담은 리스트를 return하도록 solution 함수를 완성해주세요.


function sort(arr) {
    let sortArr = [];
    // let lastIndex = sortArr[sortArr.length - 1];

    // sortArr[0] < arr[1] ? sortArr.push(arr[1]) : sortArr.unshift(arr[1]);
    // sortArr[1] < arr[2] ? sortArr.push(arr[2]) : sortArr.unshift(arr[2]);
    //
    // sortArr[2] < arr[3] ? sortArr.push(arr[3]) : sortArr.unshift(arr[3]);
    // sortArr[3] < arr[4] ? sortArr.push(arr[4]) : sortArr.unshift(arr[4]);


    // 12 , 4 => 4, 12
    // 12, 15 => 4, 12, 15
    // 4, 12, 15, 46 => 4, 12, 15, 46
    // 4, 12, 15, 46, 38 => 46, 38 => 4, 12, 15, 38, 46
    // 마지막 인덱스에서 클경우 뒤로 넣고, 아닐경우 앞으로 넣기

    // for (let i = 0; i < arr.length; i++) {
    //     // console.log(sortArr[0], arr[i]);
    //     // console.log("마지막 숫자", lastIndex, sortArr.length);
    //     // console.log(sortArr[sortArr.length - 1]);
    //     // console.log("마지막 숫자", lastIndex);
    //
    //
    //     if (sortArr[sortArr.length - 1] < arr[i + 1]) {
    //         // console.log(sortArr[sortArr.length - 1]);
    //         // console.log('a', arr[i + 1], sortArr[sortArr.length]);
    //         // sortArr.push(arr[i + 1]);
    //         sortArr.splice(sortArr.length, 0, arr[i + 1]); // length 위치에 넣으면 push와 같음
    //         // sortArr.splice(sortArr[sortArr.length + 1], arr[i + 1])
    //         // console.log('a', sortArr.length, sortArr[sortArr.length - 1], sortArr);
    //     } else {
    //         // console.log('b', arr[i + 1], sortArr[sortArr.length]);
    //         // sortArr[sortArr.length].unshift(arr[i + 1]);
    //
    //         // sortArr.unshift(arr[i + 1]);
    //         sortArr.splice(sortArr.length - 1, 0, arr[i + 1]); // 마지막 요소 앞에 35 삽입
    //
    //         // sortArr.splice(sortArr[sortArr.length - 1], arr[i + 1]);
    //         // console.log('b', sortArr.length, sortArr[sortArr.length - 1], sortArr);
    //     }
    // }


    // for (let i = 0; i < arr.length; i++) {
    //     sortArr.splice(1,1, 'b', 'c');
    // }

    // console.log("마지막 숫자", lastIndex);

    return sortArr;
}

console.log(sort([12, 4, 15, 46, 38, 1, 14, 56, 32, 10]));

function solution(num_list) {


}

// console.log(solution([12, 4, 15, 46, 38, 1, 14, 56, 32, 10]));	// [15, 32, 38, 46, 56]