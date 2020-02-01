function map(arr, callback) {
  let newArr = []
  for (let x = 0; arr.length > x; x++) {
    newArr.push(callback(arr[x]))
  }
  return newArr
}

function reduce(arr, callback, startingPoint=null) {
  let total
  let x = 0
  if (startingPoint) {
    total = startingPoint
  } else {
    total = arr[x]
    x = 1
  }
  for (x; arr.length > x; x++) {
    total = callback(total, arr[x])
  }
  return total
}