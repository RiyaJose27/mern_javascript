//Remove duplicate characters(case-sensitive) including
//punctuation. Keep only the last instance of each character
//and don't you dare use built in functions for this one!
//"Snaps! crackles! pops!" -> "Snrackle ops!"
//scoop dedupe!
// const dedupe = (str) => {
//     var charArr = [];
//     var output = "";
//     for (var i = str.length-1; i >= 0 ;--i){
//         if(!find(charArr,str[i])){
//             charArr.push(str[i]);
//             output = str[i] + output;
//         }
//     }
//     return output;
// }

// const find = (arr, letter) =>{
//     for(var i = 0; i < arr.length; ++i){
//         if(arr[i] == letter){
//             return true;
//         }
//     }
//     return false;
// }


// console.log(dedupe("Snaps! crackles! pops!"));
// console.log(dedupe("Did I shine my shoes today?"));
// console.log(dedupe("scoop dedupe!"));

// const dedupe = (str) => {
//     var arr = [];
//     var output = "";
//     count = 0;
//     for (var i = str.length - 1; i >=0; i--){
//         for (var j=0; j < arr.length; j++){
//             if (str[i] === arr[j]){
//                 count++;
//             }
//         }
//         if (count === 0){
//             arr.push(str[i]);
//             output = str[i] + output;
//         }
//         count = 0;
//     }
//     return output;
// }


// console.log(dedupe("Snaps! crackles! pops!"));
// console.log(dedupe("Did I shine my shoes today?"));
// console.log(dedupe("scoop dedupe!"));




const dedupe = (str) => {
    newString = '';
    for(let i = 0; i < str.length; i++){
        let counter = 0;
        for(let j = i + 1; j < str.length; j++){
            if(str[i] == str[j]){
                counter++;
            }
        }
        if(counter == 0){
            // newString += str[i];
            newString += str[i];
        }
    }
    return newString
}

console.log(dedupe("Snaps! crackles! pops!"));
console.log(dedupe("Did I shine my shoes today?"));
console.log(dedupe("scoop dedupe!"));




// const dedupe = (str) => {
    
//     let letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",".","!","?"," "]
//     /* This one does the FIRST instance of each letter in order, not the last */
//     /* let newStr = ""
//     for (let i = 0; i < str.length; i++) {
//         const I = str[i];
//         for (let j = 0; j < letters.length; j++) {
//             const J = letters[j];
//             if (I == J ) {
//                 newStr+=I
//                 letters[j] = null
//                 console.log(newStr)
//             }
//         }
//     }
//     return newStr
// } */

// /* THIS is the correct version */
//     let newStr = ""
//     for (let i = str.length; i > -1; i--) {
//         const I = str[i];
//         for (let j = 0; j < letters.length; j++) {
//             const J = letters[j];
//             if (I == J ) {
//                 newStr+=I
//                 letters[j] = null
//                 console.log(newStr)
//             }
//         }
//     }

//     let revStr = ""
//     for (let k = newStr.length-1; k >-1; k--) {
//         const element = newStr[k];
//         revStr+=element
//     }

//     return revStr
// }
// console.log(dedupe("Snaps! crackles! pops!"));
// console.log(dedupe("Did I shine my shoes today?"));
// console.log(dedupe("scoop dedupe!"));



