// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

// steven's solution 
function matrix(n) {
    const results = [];
    for(let i = 0; i < n; i++){
        results.push([])
    }
    let counter = 1;
    let startColumn = 0;
    let endColumn = n - 1;
    let startRow = 0;
    let endRow = n -1;
    while(startColumn <= endColumn && startRow <= endRow){
        //top row
        for(let i = startColumn; i<=endColumn; i++){
            results[startRow][i] = counter;
            counter ++;
        }
        startRow++
        //right column 
        for(let i = startRow; i<=endRow; i++){
            results[i][endColumn] = counter;
            counter ++;
        }
        endColumn--;
        //bottom row
        for(let i = endColumn; i>=startColumn; i--){
            results[endRow][i] = counter;
            counter++;
        }
        endRow--;
        //start column
        for(let i = endRow; i>=startRow; i--){
            results[i][startColumn] = counter;
            counter++;
        }
        startColumn++;
    }
    return results;
}

//try rewriting it. might understand it better!
function matrix(n){
    //construct the matrix first
    const matrix = [];
    for(let i = 0; i<n; i++){
        matrix.push([]);
    }
    //once the matrix is contruct it should look like this
    // assuming n = 3 
    // matrix = [[],
    //           [],
    //           []]
    //create a count variable to keep count
    // should start at 1 because the matrix dont start at 0 
    const count = 1;
    //now you need to create matrix markers
    //make a start row index
    const sr = 0;
    //make a start column index
    const sc = 0;
    //make a end row index, n is max length
    //remember to -1 to convert to index
    const er = n - 1;
    //make a end column index 
    const ec = n - 1;
    //now you need a while loop that can stop the marker from going out of bound
    while(sr >= er && sc >= ec){
        //start filling in the first row
        // this can accomplished by moving the marker while filling in the counter
        // remember the filling is wrapped in a matrix
        // i is the moving piece. remember column is the x mover while row is y mover
        // so if i starts at sc and will increment till ec bound 
        for(let i = sc; i<=ec; i++){
            // sr is constant at this point because only column is moving
            //set the value of i to be counter which is at 1 
            matrix[sr][i] = count;
            //remember to increment the counter while i is moving
            count ++;
        }
        //remember to increment row for column to keep moving!
        sr++;
        //now our marker is at ec and sr so we gotta move down
        for(let i = ec; i<=er; i++){
            //move vertically so i is now in the row space 
            // 
            matrix[i][]
        }

    }
}

module.exports = matrix;
