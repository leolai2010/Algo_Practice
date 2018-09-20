static int diagonalDifference(int[][] a) {
    int primeDi = 0, secondDi = 0;
    // could be improved to 
            // int sum = 0;
    for (int i = 0 , j = a[0].length-1; i < a[0].length ; i++, j--) {
        primeDi += a[i][i] ;
        secondDi += a[i][j] ;
                    // could be improved to 
                    // sum = a[i][i] - a[i][j] ;
    }

    return Math.abs(primeDi - secondDi);
            // could be improved to
            // return Math.abs(sum);
}