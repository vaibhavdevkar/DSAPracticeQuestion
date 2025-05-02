function findMinMax(arr) {
    if (arr.length === 0) {
        return { min: null, max: null };
    }

    let min = arr[0];
    let max = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
        if (arr[i] > max) {
            max = arr[i];
        }
    }

    return { min, max };
}

// Example usage:
const numbers = [7, 2, 9, 4, 5, 1, 8, 3, 6];
const result = findMinMax(numbers);
console.log(`Min: ${result.min}, Max: ${result.max}`);