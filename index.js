function map(arr, funct){
  let array = []
  for(let i = 0; i < arr.length; i++){
    array.push(funct(arr[i]))
  }
  return array
}

function reduce(arr, funct, start){
  let r = (!!start) ? start : arr[0]
  let i = (!!start) ? 0 : 1

  for(; i < arr.length; i++){
    r = funct(arr[i], r)
  }
  return r
}

