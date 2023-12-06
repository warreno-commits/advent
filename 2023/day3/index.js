import fs from 'fs';

const lines = fs.readFileSync('./example.txt', 'utf-8').trim().split('\n')
// console.log(lines)
// console.log(lines.length)
function partOne(){
    const partNumbers = [];
    for (let i = 0 ; i < lines.length; i++) {
        console.log(lines[i].replace(/\D/g,' ').split(" "))
        partNumbers.push(parseInt(lines[i].replace(/\D/g,' ').split(" ")))
        }
   // console.log(partNumbers)    
}

console.log(lines);

partOne();
