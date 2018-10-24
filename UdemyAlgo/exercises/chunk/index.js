// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
    //create array that will hold the chunked data
    const chunked = [];
    //iterate through the array
    for(let element of array){
        //make a variable that will grab the last element of the array
        const last = chunked[chunked.length-1];
        // check if the element does not exist 
        // or if the last element is equal to chunk size
        if(!last || last.length === size){
            chunked.push([element]);
        } else {
            last.push(element);
        }
    }
    return chunked
}

function chunk(array, size) {
    const chunked = []
    //create an index that will indicate where to slice
    let index = 0
    //keep on slicing the array until there is no more length to slice
    while(index < array.length){
        //slice base on first index and index + amount(size) to slice off
      chunked.push(array.slice(index, index + size))
        // increment index to move on next section to be sliced 
      index += size
    }
    return chunked
  }

module.exports = chunk;
