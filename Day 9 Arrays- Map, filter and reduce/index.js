let arr = [1,2,3,4,5,6]

// Map function (It transforms the array)

// Double the value

function double(a) {
    return a*2;
}

const anyName = arr.map(double);
console.log(anyName);

//Make the values binary

const binary = arr.map((x) => x.toString(2))

console.log(binary)

// filter function
// filter odd numbers from the array

const arr2 = [1,2,3,4,5,6,7,8,9,10];

const isOdd = arr2.filter((x) => x % 2);
console.log(isOdd);
const isEven = arr2.filter((x) => x%2 === 0);
console.log(isEven);

// reduce function

const sumOfAll = arr2.reduce((acc, curr) => acc = acc + curr)
// acc = accumulator. curr = current values in the array
console.log(sumOfAll)

// Other way to find the sum of all numbers

function addem(arr2) {
    let sum = 0
    for (let i = 0; i < arr2.length; i++) {
        sum = sum + arr2[i];       
    }
    return sum;
}

console.log(addem(arr2))