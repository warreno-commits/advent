import fs from 'fs';

const lines = fs.readFileSync('./example.txt', 'utf-8').trim().split('\n')

function partOne(){
   // console.log(lines);
    let partNumbers = [];
    let previousRow = [];
    let currentRow =  [];
    let nextRow = [];
    for (let i = 0 ; i < 1; i++) {
      //  console.log(lines[i].replace(/\D/g,' ').split(" "))
      //  partNumbers.push(parseInt(lines[i].replace(/\D/g,' ').split(" ")))
        }
}

partOne();
