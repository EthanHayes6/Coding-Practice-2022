//Get 1 to 255
function get_array() {
    var arr = [];
    for (var i = 1; i < 256; i++){
        arr.push(i)
    }
    return arr;
}

//get even 1000
function sum_even_numbers() {
    var sum = 0;
    for (var i = 1; i < 1001; i++){
        if( i % 2 === 0){
            sum += i;
        }
    }
return sum;
}

// find sum of odd 5000
function sum_odd_5000() {
    var sum = 0;
    for ( var i = 1; i <= 5001; i++){
        if ( i % 2 === 1){
            sum += i
        }
    }
    return sum;
}

console.log(sum_odd_5000())

// Iterate an array
function iterArr(arr){
    for (var i = 0; i < arr.length; i++){
        console.log(arr[i])
    }
}
iterArr([20,1,20])

//Find Max
function findMax(arr){
    var max = arr[0];
    for (var i = 1; i < arr.length; i++){
        if(max < arr[i]){
            max = arr[i]
        }
    }
    return max;
}
console.log(findMax([5,90,22]))

//find average 
function findAvg(arr){
    var sum = 0;
    for (var i = 0; i < arr.length; i++){
        sum = sum + arr[i]
    }
    return sum / arr.length
}

// Array odd
var arr = [];
var array = [];
for( var i = 1; i < 50; i++){
    if( i % 2 !== 0){
        arr.push(i);
    }
    return array;
}

//Greater than Y
function greaterY(arr,Y){
    var count = 0;
    for (var i = 0; i < arr.length; i++){
        if (arr[i] > Y){
            count++;
        }
    }
    return count;
}

//squares
function squareVal(arr) {
    for (var i = 0; i < arr.length; i++){
        arr[i] = arr[i] * arr[i];
    }
    return arr;
}

//negative
function noNeg(arr) {
    for(var i = 0; i < arr.length; i++){
        if (arr[i] < 0) {
            arr[i] = 0
        }
    }
    return arr;
}