const array = [1,3,5,2,6,24,16,35,786,3342,345,75]
let operations = 0

// Somar 2 numeros dentro do array
let sum = array[5] + array[8]
operations++

let result = sum

console.log("O(n)")
console.table([
  ["Number of operations:", operations],
  ["Length of Array:", array.length],
  ["Result:", result]
])