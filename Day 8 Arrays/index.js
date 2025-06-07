let arr = [1,2,3,4,5,6];
 console.log(arr.push(30))
console.log(arr)
console.log(arr.shift())
console.log(arr)
console.log(arr.unshift(80));
console.log(arr);
// To add an element use unshift(adds to the beginning) and push(adds to the end)
// To remove an element use shift (removes the first element) and pop (removes the last element)
let arr2 = [10,20,30,40,50];
let arr3 = ["one","two"];
console.log(arr.concat(arr2,arr3));
console.log(arr)
console.log(arr.pop())
console.log(arr)
console.log(arr.push(6))
console.log(arr)
console.log(arr.splice(1,4))
console.log(arr)
let arr4 = [1.1,2.3,4.5,6.7]
console.log(arr4.splice(0,3,1,2,3));
console.log(arr4);
