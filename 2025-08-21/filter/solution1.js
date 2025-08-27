


function filter(arr, f) {
    const answer = [];

    for (let i = 0; i < arr.length; i++) {
        if(f(arr[i])) {
            answer.push(arr[i]);
        }
    }

    return answer;
}

console.log(filter([1, 2, 3, 4, 5, 6, 7], (x) => x % 2 === 0));