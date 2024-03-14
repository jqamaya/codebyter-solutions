function permutation (num) {
    let arr = num.toString().split('');
    
    let len = arr.length, current, previous, tempArr;
    
    for (let i = len; i >= 0; i--) {
        current = arr[i];
        previous = arr[i - 1];
    
        if (current > previous) {
            arr[i] = previous;
            arr[i - 1] = current;
    
            tempArr = arr.splice(i, len - 1).sort();
    
            return arr.concat(tempArr).join('');
        }
    }
    
    return -1;
}
