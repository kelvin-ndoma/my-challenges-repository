
/*
   This program outputs  to the user their tax deductions, nhif, nssf, the total amount deducted then prints out the  
    Gross salary = all_benefits + basic salary e.g house_allowance + hardship_allowance + risk_allowance + basic_salary
    Taxable income = Gross pay
    Deductions = (Tax + NHIF + NSSF)
    Earnable pay = Gross pay - deductions e.g Gross salary - (Tax + NHIF + NSSF) ==> net salary
    Write a program whose major task is to calculate an individual’s Net Salary by getting the inputs of basic salary and benefits. Calculate the payee (i.e. Tax), NHIF Deductions, NSSF Deductions, gross salary, and net salary. 

NB: Use KRA, NHIF, and NSSF values provided//
*/

const readline = require('readline');
const input = readline.createInterface(
    {
        input: process.stdin,
        output: process.stdout
    }
);

input.question("ENTER YOUR GROSS SALARY?\n N/B: Gross salary=Basic salary+Deductions\n", function (gross_pay){
    
    let Tax;
    let extra_taxable_pay;
    let nhif;
    let nssf= 200;
    let total_deductions;
    let net_salary;

    //calcluating the taxes which are required to tabulate the deductions//
    if (gross_pay < 24001){
        Tax = gross_pay * 0.1;
    }else if (gross_pay < 32334){
        Tax = 2400;
        extra_taxable_pay = gross_pay - 24000;
        Tax = (extra_taxable_pay * 0.25) + Tax;
    }else {
        Tax = 4483;
        extra_taxable_pay = gross_pay - 32333;
        Tax = (extra_taxable_pay * 0.30) + Tax;   
       //calculating NHIFs for the repective gross_pay//
    }
    if (gross_pay < 6000){
        nhif = 150;
    }else if(gross_pay < 8000){
        nhif = 300;
    }else if(gross_pay< 12000){
        nhif = 400;
    }else if(gross_pay < 15000){
        nhif = 500;
    }else if(gross_pay < 20000){
        nhif = 600;
    }else if(gross_pay < 25000){
        nhif = 750;
    }else if(gross_pay < 30000){
        nhif = 850;
    }else if(gross_pay < 35000){
        nhif = 900;
    }else if(gross_pay < 40000){
        nhif = 950;
    }else if(gross_pay < 45000){
        nhif = 1000;
    }else if(gross_pay < 50000){
        nhif = 1100;
    }else if(gross_pay < 60000){
        nhif = 1200;
    }else if(gross_pay < 70000){
        nhif = 1300;
    }else if(gross_pay < 80000){
        nhif = 1400;
    }else if(gross_pay < 90000){
        nhif = 1500;
    }else if(gross_pay > 100000){
         nhif = 1600;
    }else{
        nhif = 1700;
    }
// this are the necessary arithmetics required for the net salary calculation.
//the process.stdout.write are used to print out the resulting tabulations after the deductions incurred
    total_deductions = nhif + Tax + nssf;
    net_salary = gross_pay - total_deductions;
    process.stdout.write(`Your gross pay is Ksh: ${gross_pay}\n`);
    process.stdout.write(`Your P.A.Y.E is Ksh: ${Tax}\n`);
    process.stdout.write(`Your NHIF deduction pay is Ksh: ${nhif}\n`);
    process.stdout.write(`Your standard NSSF deduction is Ksh: ${nssf}\n`);    
    process.stdout.write(`Your Total deduction amount to Ksh: ${total_deductions}\n`);
    process.stdout.write(`Your Net Salary is Ksh: ${net_salary}\n`);    

    input.close();
 }
);
