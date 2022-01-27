function myBirthYearFunc(){
        console.log("I was born in" + 1980);
    }
    //console will log "I was born in 1980"

    function myBirthYearFunc(birthYearInput){
        console.log("I was born in" + birthYearInput);
    }
    //Since the birth year input is equal to 1980 the console would still log "I was born in 1980"

    var num1 = 10
    var num2 = 20

    function add(num1, num2){
            console.log("Summing Numbers!");
            console.log("num1 is: " + num1);
            console.log("num2 is: " + num2);
            var sum = num1 + num2;
            console.log(sum);
        }
        //The console would first log "Summing Numbers!"
        //Next It would log "num1 is 10"
        //Then it would log "num2 is 20"
        //It would end with logging the sum of the two variables which is 30.
        