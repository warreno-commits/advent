import fs from 'fs';

const lines = fs.readFileSync('./example.txt', 'utf-8').trim().split('\n')
// console.log(lines);

function processHistory(history){
let historyArray = []
historyArray.push(history);
let currentLineOfHistory = history
let findZero = 1
let currentParse = 0
while(findZero != 0){
    let diffValues = []
    let previousValue = ""
    let currentDiff = ""
    let initialValue = currentLineOfHistory[0]
        for(let i = 1; i < currentLineOfHistory.length; i++){
            if(i==1){previousValue = initialValue}
                currentDiff = currentLineOfHistory[i] - previousValue
                previousValue = currentLineOfHistory[i]
                diffValues.push(currentDiff);
         }
   // console.log(historyArray);
    historyArray.push(diffValues);
  //  console.log("diffValues" + diffValues)
    currentLineOfHistory = diffValues
    currentParse++
    if(diffValues[0] == 0 && diffValues[1] == 0) {
     //   console.log("Found Zero")
        findZero = 0
    }
}
// console.log(historyArray);
let historySum = 0
for(let j = historyArray.length-1; j >= 0  ; j--){
let currentArray = historyArray[j]
// console.log(currentArray)
// console.log(currentArray[currentArray.length-1])
historySum = historySum + parseInt(currentArray[currentArray.length-1])
console.log("historySum " + historySum)
}

}

function partOne(){
    for (let i = 0 ; i < 1; i++){
    let lineArray = lines[i].replace("\r","").split(" ")
    processHistory(lineArray);
    }
}

partOne();