//changes array in place, but needs a sliced array
//returns the index of the pivot
const partition = (arr) => {
    console.log(arr);
    const pivot = arr[0];
    let pivi = 0;
    for(let i = 1; i < arr.length; ++i){
        if(arr[i] < pivot){
            ++pivi;
            //put number at the beginning
            for(let j = i - 1; j >= 0; --j){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
            console.log(arr);
        }
    }

    console.log(arr);
    return pivi;
}
console.log(partition([6,4,5,2,8,14,1,3]));

const quickSort = (arr) => {
    console.log(arr);
    //partition the array
    let pivi = partition(arr);
    if(arr.length <= 2) return arr;
    
    //quicksort everything from left of pivot
    let leftHalf = quickSort(arr.slice(0,pivi));
    //quicksort everything from right of pivot
    let rightHalf = quickSort(arr.slice(pivi + 1));

    //return qs'd left half, pivot, qs'd right half
    return [...leftHalf, arr[pivi], ...rightHalf];
}

console.log(quickSort([7,45,2,67,3,2,1]));


