import fs from 'fs';

const lines = fs.readFileSync('./input.txt', 'utf-8').trim().split('\n')
// console.log(lines);
const times = lines[0].replace("Time:", "")
// console.log(times);
let timesArray = times.split(" ")
timesArray = timesArray.filter((str) => str !== '');
// console.log(timesArray)
const distances = lines[1].replace("Distance:", "")
let distancesArray = distances.split(" ")
distancesArray = distancesArray.filter((str) => str !== '');
// console.log(distancesArray)

function partOne(){
   for(let i = 0; i < timesArray.length; i++){
        let time = timesArray[i]
        let distance = distancesArray[i]
 
        let holdDownTime = 1
        let differentWays = 0
        for( ; holdDownTime < distance ; holdDownTime++){
            let timeToMove = (time-holdDownTime)
            let distanceTraveled = holdDownTime * timeToMove;
           // console.log("timetomove:" +  timeToMove)
           // console.log("distanceTraveled"+ distanceTraveled)
            if(distanceTraveled > distance){
                differentWays++;
            }
        }
        console.log(differentWays)                   
    }
}

partOne(); 