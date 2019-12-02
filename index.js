// Add your functions here

function map(srcArr, work) {
    let newArr = []
    
    for(let i = 0; i < srcArr.length; i++) {
        let n = srcArr[i]
        newArr.push(work(n));
    }
    return newArr
}

function reduce(srcArr, cb, start= 0) {
    let r = (!!start) ? start : srcArr[0]
    let i = (!!start) ? 0 : 1

    for(; i < srcArr.length; i++) {
        r = cb(srcArr[i], r)
    }
    return r
}