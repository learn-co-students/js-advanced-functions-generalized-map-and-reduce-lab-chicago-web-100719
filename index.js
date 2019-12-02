// Add your functions here
function map(array, work){
    let newArray = []
    for(let i = 0; i < array.length; i++) {
        let n = array[i]
        newArray.push(work(n));
    }
    return newArray
}
function reduce(src, cb, starting){
    let r = (!!starting) ? starting : src[0]
    let i = (!!starting) ? 0 : 1
  
    for (; i < src.length; i++) {
      r = cb(src[i], r)
    }
  
    return r;
  }