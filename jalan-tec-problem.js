// problem No-01 


function alternateOrder(arr) {
    let positives = arr.filter(x => x > 0);
    let negatives = arr.filter(x => x < 0);

    let result = [];
    while (positives.length > 0 && negatives.length > 0) {
        result.push(positives.shift());
        result.push(negatives.shift());
    }
    result = result.concat(positives, negatives);

    return result;
}

// Example usage
let arr = [-3, 1, 2, 4, -6, 8, -8, -1];
console.log(alternateOrder(arr));