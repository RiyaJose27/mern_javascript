//You are given a string that may contain sequences of consecutive characters.
//Create a function to shorten a string by including the character, then the 
//number of times it appears. For "aaaabbcddd" return "a4b2c1d3"


//no built in functions!!!! parseInt() is ok


// const encode = (str) => {
//     var output = "";
//     var count = 1;
//     output += str[0];
//     for(var i = 1; i < str.length;++i){
//         if(str[i]===str[i-1]){
//             ++count;
//         }else{
//             output += count;
//             output += str[i];
//             count = 1;
//         }
//     }
//     output += count;
//     return output;
// }

// console.log(encode("aaabbccccaacaa"));
// console.log(encode("ddddeeeeeffgggg"));
// console.log(encode("aaaaabbbbbbbc"));
// console.log(encode("bb"));

//given an encoded string, decode and return it
//given "a3b2c1d3" return "aaabbcddd"
//parseInt() is ok
//special note: can your function handle "g14f12"?
const decode = (str) => {
    let current = []
    let outputString = ""
    for (let i = 0; i < str.length; ++i) {
        if (i === 0) {
            current.push(str[i]) 
        }
        if (isNaN(str[i]) == true) {
            current.pop()
            current.push(str[i])
        }
        if (isNaN(str[i]) == false) {
            outputString = outputString + `${current[0]}`.repeat(str[i])
        }
    }
    return outputString
}

console.log(decode("a3b2c1d3"))
console.log(decode("a5b9c2d4"))
