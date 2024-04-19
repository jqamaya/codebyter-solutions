var spiralOrder = function(matrix) {
    var spiralArray = [];
    if (matrix.length === 0) {
        return spiralArray;
    }
    var rowBegin = 0;
    var rowEnd = matrix.length - 1;
    var colBegin = 0;
    var colEnd = matrix[0].length - 1;
    
    while (colBegin <= colEnd && rowBegin <= rowEnd) {
        for (var i = colBegin; i <= colEnd; i++) {
            spiralArray.push(matrix[rowBegin][i]);
        }
        rowBegin++;
        for (var i = rowBegin; i <= rowEnd; i++) {
            spiralArray.push(matrix[i][colEnd]);
        }
        colEnd--;
        if (rowBegin <= rowEnd) {
            for (var i = colEnd; i >= colBegin; i --) {
                spiralArray.push(matrix[rowEnd][i]);
            }
        }
        rowEnd--;
        if (colBegin <= colEnd) {
            for (var i = rowEnd; i >= rowBegin; i--) {
                spiralArray.push(matrix[i][colBegin]);
            }
        }
        colBegin++;
    }
    return spiralArray;
};