    
/*Speed is input an integer
the programs uses the  readline.createInterface()  to input user values and give results
for Speed limit < 70km/s;  the program is set to print OK! meaning we are safe haha! 
 but for Speed limits >70km/s, the program is set to demerit the driver 1 point for every 5 km/s speed above the set speed limit print total number of demerit point.
 if the demerit points are above 12 the the drivers licence is to be suspended,.# say no to reckless driving

 question:Write a program that takes the speed of a car as input e.g 80. If the speed is less than 70, it should print “Ok”. Otherwise, for every 5 km/s above the speed limit (70), 
 it should give the driver one demerit point and print the total number of demerit points.
*/

const readline = require('readline');
const input = readline.createInterface(
{
    input: process.stdin,
    output: process.stdout
}
);

input.question("Speed of the car: ", function (speed){ 
let speed_of_car = parseInt(speed, 10);
if (isNaN(speed)){
    process.stdout.write("Speed must be a numerical value\n");
    process.stdout.write("use this a follows: On prompt input as numerical value e.g 50\n");
    process.exit(1)
}else{
   if (speed_of_car < 70){
    process.stdout.write("Ok!\n");
   } else{
    const demerit_points = ((speed_of_car - 70) / 5);
    Math.ceil(demerit_points);
    process.stdout.write(`Points: ${demerit_points}\n`);
        if (demerit_points >= 12) {
            process.stdout.write("License suspended.\n");                
        } else {
            process.exit(0);                
        }
   }
}
input.close();
});