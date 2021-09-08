function selectionSort(arr){
    for(let i = 0; i < arr.length - 1; ++i){
        let mindex = i;
        for(let j = i; j < arr.length; ++j){
            if(arr[mindex] > arr[j]){
                mindex = j;
            }
        }
        console.log(`new min: ${arr[mindex]}`);
        let temp = arr[i];
        arr[i] = arr[mindex];
        arr[mindex] = temp;
    }
    return arr;
}

console.log(selectionSort([5,4,2,6,8,14,1,3]));