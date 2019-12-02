// Add your functions here
function map(array, funct) {
    let newArray = []
    for (let i = 0; i < array.length; i++) {
        newArray.push(funct(array[i]))
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