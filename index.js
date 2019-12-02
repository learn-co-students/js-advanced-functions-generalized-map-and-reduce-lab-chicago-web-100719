// Add your functions here
function map(array, work){
    let newArray = []
    for(let i = 0; i < array.length; i++) {
        let n = array[i]
        newArray.push(work(n));
    }
    return newArray
}
function reduce(src, block, starting){
    let arr = starting ? starting : src[0]
    let i = starting ? 0 : 1

    for (; i < src.length; i++) {
      arr = block(src[i], arr)
    }

    return arr;
} 