// Add your functions here
const map = (array, funct) => {
    let result = []
    for (let i = 0; i< array.length; i++) {
        result.push(funct(array[i]))
    }
    return result
}

const reduce = (array, funct, startingValue)=> {

    let result = (!!startingValue) ? startingValue : array[0]
    let i = (!!startingValue) ? 0 : 1

    for (i ; i< array.length; i++){
        result = funct(array[i], result)
    }
    return result
}