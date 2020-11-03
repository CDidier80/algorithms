let testArray = [4,6,8,2,6,7,4,3,0]
let arrayLength = testArray.length 
let sortedArray = testArray // init copy
console.log("copy of numbers to sort:" , sortedArray)
for (i1 = 0; i1 < (arrayLength-1); i1++) {
    for (i2 = 0; i2 < arrayLength-1; i2++) {
        if (sortedArray[i2] > sortedArray[i2 + 1]) {
            let storedValue = sortedArray[i2]
            sortedArray[i2] = sortedArray[i2 + 1]
            sortedArray[i2 + 1] = storedValue
        }
    }
}