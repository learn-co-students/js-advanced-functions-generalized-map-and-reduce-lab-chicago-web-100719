// Add your functions here
// map
// Your implementation should expect a source array and a function. All the tests will pass an Array and a block.
//
// Remember, map returns a new Array.


function map(sourceArr, fn) {
  let retArr = []
  for (let i = 0; i < sourceArr.length; i ++){
    retArr.push(fn(sourceArr[i]))
  }
  return retArr
}



function reduce(src, cb, starting){
  let r = (!!starting) ? starting : src[0]
  let i = (!!starting) ? 0 : 1

  for (; i < src.length; i++) {
    r = cb(src[i], r)
  }

  return r;
}
