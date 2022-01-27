// we know we need a loop because were dispensing candy everytime a runner reaches two miles 
// the starting point of the loop should be 2
// the loop should stop when the variable is less than or equal to six 
// it will know when to stop when I set it to a number to stop by 
// the incrementation should increase by two 
// mainly variables to determain how many miles were ran 

for( var runnerMiles = 0; runnerMiles <= 6; runnerMiles++2) {
    console.log(runnerMiles);
    runnerMiles++2;
    if(runnerMiles === 2){
        console.log("Candy Time!")
    }
}

