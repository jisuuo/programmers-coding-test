function some(arr, f) {
    for (let i = 0; i < arr.length; i++) {
        if (f(arr[i])) {
            return true;
        }
    }
    return false;
}

// _.some([null, 0, 'yes', false]);
// => true

console.log(some([1, 2, 3, 4, 5, 6, 7], (x) => x === 4)); // true

// true로 평가되는 값
// ??????

