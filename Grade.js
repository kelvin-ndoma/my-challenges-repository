//on this challenge i included html to prompt the user to input the marks at the web.
//whenever the user inputs a value beyond 0-100 the output  prompt gives a "can't find your grade"*/
//on the browser -----Write a function that prompts the user to input student marks. 
//The input should be between 0 and 100. The output should correspond the correct grade, as shown below: //

//        A > 79, B - 60 to 79, C -  59 to 49, D - 40 to 49, E - less 40.----------

function promptMarks(){
    marks = prompt("Please Enter Students marks");

    if ((marks>=80 )&& (marks<=100)){
        console.log("Students' Grade is A");
    }
    else if((marks>=60) && (marks<=79)){
        console.log("Students' Grade is B");
    }
    else if((marks>=50) && (marks<=59)){
        console.log("Students' Grade is C");
    }
    else if ((marks>=40) && (marks<=49)){
        console.log("Students' Grade is D");
    }
    else if ((marks>=0) && (marks<=39)){
        console.log("students' Grade is E")
    }
    else{
        console.log("Can't find your grade")
    }

}