function promptSpeed(){
    speed = prompt("Please Enter your speed");

let points = (speed-70)/5;
//if speed is <= 70 the driver gets a ok compliment
    if(speed <=70){
        console.log("OK");
    }
    //if the demerit points exceed 12 the driver is considered to be overspeeding hence their lincense gets suspended
    else if (points > 12){
        console.log("License suspended");
    }
    //else give the demerit points
    else{
        console.log(`points: ${points}`);
    }
}
//calling the back
promptSpeed();