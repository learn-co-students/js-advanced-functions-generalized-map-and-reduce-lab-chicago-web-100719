// Add your functions here

function map(sourceArray, x){
    let newArray = []
    for (let i=0; i < sourceArray.length; i++){
        newArray.push(x(sourceArray[i]))
    }
    return newArray
}

function reduce(array, funct, startingPoint = 0) {
    let marker = !!startingPoint ? startingPoint : array[0]
    let i = !!startingPoint ? 0 : 1 

    for (; i < array.length; i++) {
        marker = funct(array[i], marker)
    }

    return marker;
}