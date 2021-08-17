// Merge Sort — O(n log n) tempo e O(n) espaço.
const array = [1,3,5,2,6,24,16,35,786,3342,345,75]
let operations = 0
const length = array.length

console.log([].fill.call({length: 10},0))

function mergeShort(arr) {
  const half = arr.length / 2

  if (arr.length < 2) return arr

  const left = arr.splice(0, half)
  return merge(mergeShort(left),mergeShort(arr))
}

function merge(left, right) {
  let arr = []
  
  while (left.length && right.length) {
    if (left[0] < right[0]) arr.push(left.shift())
    else arr.push(right.shift())
    operations++
  }
  return [...arr, ...left, ...right]
}

result = mergeShort(array)

console.log("Tempo: O(n log n)")
console.log("Espaço: O(n)")
console.table([
  ["Number of operations:", operations],
  ["Length of Array:", length],
  ["Result:", result]
])