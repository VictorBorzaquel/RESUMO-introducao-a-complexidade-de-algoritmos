// Busca Binária - O(log n) tempo e O(1) espaço.
const array = [1,3,5,2,6,24,16,35,786,3342,345,75]
operations = 0

let result = searchElement(array, 786)

function searchElement(arr, proc) {
  arr.sort((a, b) => a - b)
  let rightCursor = arr.length - 1
  let leftCursor = 0
  let middleCursor = 0

  while (leftCursor <= rightCursor) {
    operations++
    middleCursor = parseInt(leftCursor + (rightCursor - leftCursor) / 2)

    if (arr[middleCursor] === proc) return middleCursor
    else if (arr[middleCursor] < proc) leftCursor = middleCursor + 1
    else rightCursor = middleCursor - 1
  }
  return -1
}

console.log("Tempo: O(log n)")
console.log("Espaço: O(1)")
console.table([
  ["Number of operations:", operations],
  ["Length of Array:", array.length],
  ["Result:", result]
])