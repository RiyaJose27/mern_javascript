// //combine two pre-sorted arrays into one sorted array
// //return the newly combined array
// //bonus challenge: combine in place into leftArr instead of a new array
// const combine = (leftArr, rightArr) => {
//     let bestArr = leftArr.concat(rightArr)
//     for (let i = 0; i < bestArr.length - 1; ++i) {
//         let mindex = i;
//         for (let j = i; j < bestArr.length; ++j) {
//             if (bestArr[mindex] > bestArr[j]) {
//                 mindex = j;
//             }
//         }
//         console.log(`new min: ${bestArr[mindex]}`);
//         let temp = bestArr[i];
//         bestArr[i] = bestArr[mindex];
//         bestArr[mindex] = temp;
//     }
//     return bestArr;
// }
// var arr1 = [1,3,4]
// var arr2 = [0,9,7]
// console.log(combine(arr1, arr2))
// // should return [0,1,2,3,4,6,7,9,11]
// // console.log(combine([1,2,7,9],[0,3,4,6,11]));

// // should return [0,1]
// // console.log(combine([1],[0]));


leftArr = [-4,1,2,7,9,14, 90,101];
rightArr = [0,3,4,6,8,10,11, 12, 13, 100, 1000];
const combine = (leftArr, rightArr) => {
    let i =0;
    let j = 0;
    const newArr = [];

    while(i < leftArr.length && j < rightArr.length){
        if (leftArr[i] < rightArr[j]){
            newArr.push(leftArr[i]);
            i++;
        }
        else{
            newArr.push(rightArr[j]);
            j++;
        }
    }
    while(i < leftArr.length){
        newArr.push(leftArr[i]);
        i++
    }
    while(j < rightArr.length){
        newArr.push(rightArr[j]);
        j++
    }

    return newArr;
}

// should return [0,1,2,3,4,6,7,9,11]
// console.log(combine([1,2,7,9],[0,3,4,6,11]));
console.log(combine(leftArr, rightArr));





const mergeSort = (arr) => {
    console.log(arr);
    if(arr.length <= 1) return arr;
    let leftHalf = arr.slice(0, Math.floor(arr.length/2));
    let rightHalf = arr.slice(Math.floor(arr.length/2));
    return combine(mergeSort(leftHalf),mergeSort(rightHalf));
}

//should return [1,2,3,4,5,6,8,14]
console.log(mergeSort([5,4,2,6,8,14,1,3,11]));