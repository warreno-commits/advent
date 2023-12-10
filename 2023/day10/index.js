import fs from 'fs';

const lines = fs.readFileSync('./example.txt', 'utf-8').trim().split('\n')
console.log(lines);

let pipeArrays = []
let xAxisStart = null
let yAxisStart = null
function buildArray(){
    for (let i = 0 ; i < lines.length; i++){
    let lineChars = lines[i].replace("\r","")
    console.log(lineChars);
    let charArray = []
        for(let char of lineChars){
        if(char == "S" ) {
            xAxisStart = null
            yAxisStart = i
        }
        charArray.push(char)
        }
    pipeArrays.push(charArray)
    }
    console.log(pipeArrays)
}

buildArray();
console.log("X" + xAxisStart);
console.log("Y" + yAxisStart);