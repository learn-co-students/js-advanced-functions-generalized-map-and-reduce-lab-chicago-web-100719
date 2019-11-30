// Add your functions here
function map (src, block) {
    let arr = []
    for (let i = 0; i < src.length; i++) {
        let element = src[i]
        arr.push(block(element))
    }
    return arr
}

function reduce(src, block, starting){
    let arr = starting ? starting : src[0]
    let i = starting ? 0 : 1
  
    for (; i < src.length; i++) {
      arr = block(src[i], arr)
    }
  
    return arr;
}