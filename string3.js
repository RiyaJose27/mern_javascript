// const upperCaseIt = (str) => {
//     let newStr = "";
//     for(let i = 0; i < str.length; ++i){
//         let this_char = str[i];
//         let code = str.charCodeAt(i);
//         code >= 97 && code <= 122 && (this_char = String.fromCharCode(code - 32));
//         newStr += this_char;
//     }
//     return newStr;
// }
// console.log(upperCaseIt("wooOOOooOO let's freAKIN Go!!!"));
// console.log(upperCaseIt("r"));

//A pangram is a sentence or phrase that uses every letter of the alphabet
//Write a function to return if a string contains at least one of every
//letter(not case sensitive).
//return true or false
//no built in functions!! toUpperCase is OK
//if(str[0] >= "A" && str[0] <= "Z") can be useful
const isPangram = (str) => {
    const upper = str.toUpperCase();
    let reference = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    for(let i = 0; i < upper.length; i++){
        for(let j = 0; j < reference.length; j++){
            if(upper[i] == reference[j]){
                let temp = reference[j];
                reference[j] = reference[reference.length-1];
                reference[reference.length-1] = temp;
                reference.pop();
            }
        }
    }
    console.log(reference)
    if(reference.length == 0){
        return true;
    } else{
        return false;
    }
}




// console.log(isPangram("Waxyand quivering, jocks fumblethe pizza."));//returns true
console.log(isPangram("The quick brown fo jumps over the lazy sleeping dog"));//missing x, returns false

// console.log(isPangram("Sphinx of black quartz, judge my vow"));

//Write a function to check if a string contains exactly one of every letter
//again, not case sensitive and it's ok to use toUpperCase
const isPerfectPangram = (str) => {
    const upper = str.toUpperCase();
    let reference = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    for(let i = 0; i < upper.length; i++){
        let isFirst = false;
        for(let j = 0; j < reference.length; j++){
            if(upper[i] == reference[j]){
                let temp = reference[j];
                reference[j] = reference[reference.length-1];
                reference[reference.length-1] = temp;
                reference.pop();
                isFirst = true;
            }
        }
        if(upper[i] != ' ' && isFirst == false){
            console.log(upper[i])
            return false;
        }
    }
    console.log(reference)
    if(reference.length == 0){
        return true;
    } else{
        return false;
    }
}


console.log(isPerfectPangram("The quick brown fox jumps over the lazy sleeping dog"));//should be false
console.log(isPerfectPangram("qrstuvwxyzabcdefghijkLMNOP"));//should be true















const upperCaseIt = (str) => {
    let newStr = "";
    for(let i = 0; i < str.length; ++i){
        let this_char = str[i];
        let code = str.charCodeAt(i);
        code >= 97 && code <= 122 && (this_char = String.fromCharCode(code - 32));
        newStr += this_char;
    }
    return newStr;
}
// console.log(upperCaseIt("wooOOOooOO let's freAKIN Go!!!"));
// console.log(upperCaseIt("r"));

//if(str[0] >= "A" && str[0] <= "Z") can be useful

const isPangram = (str) => {
    const upper = str.toUpperCase();
    let alphabet = {}
    for (let i = 0; i < upper.length; i++) {
        const element = upper[i];
        if (alphabet[element]) {
            alphabet[element]+=1
        }
        else if(element!= "."&& element!= "," && element!=  " "){
            alphabet[element]=0
        }
    }
    console.log(Object.keys(alphabet).length)
    console.log(alphabet)
    if (Object.keys(alphabet).length==26) {
        return true
    }
    return false
}

// console.log(isPangram("Waxy and quivering, jocks fumble the pizza."));//returns true
// console.log(isPangram("The quick brown fo jumps over the lazy sleeping dog"));//missing x, returns false
// console.log(isPangram("Sphinx of black quartz, judge my vow"));

//Write a function to check if a string contains exactly one of every letter
//again, not case sensitive and it's ok to use toUpperCase
const isPerfectPangram = (str) => {
    let newStr = str.replace(/[^A-Za-z]/g, '')
    // console.log(newStr)
    // console.log(newStr.length)

    if(isPangram(newStr)&& newStr.length==26){
        return true
    }
    return false
}

console.log(isPerfectPangram("The quick brown fox jumps over the lazy sleeping dog"));//should be false
console.log(isPerfectPangram("qrstuvwxyzabcdefghijkLMNOP"));//should be true