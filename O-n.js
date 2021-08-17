const array = [1,3,5,2,6,24,16,35,786,3342,345,75]
let operations = 0

// View big number of Array
let max = array[0]
for (let i = 0; i < array.length; i++) {
  operations++
  if (max < array[i]) max = array[i]
}
let result = max

console.log("O(n)")
console.table([
  ["Number of operations:", operations],
  ["Length of Array:", array.length],
  ["Result:", result]
])