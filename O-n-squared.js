let maxSum = array[0] + array[1]
for (let i = 0; i < array.length; i++) {
  for (let ii = 0; ii < array.length; ii++) {
    operations++
    if (maxSum < array[i] + array[ii]) maxSum = array[i] + array[ii]
  }
}
let result = maxSum

console.log("O(n²)")
console.table([
  ["Number of operations:", operations],
  ["Length of Array:", array.length],
  ["Result:", result]
])