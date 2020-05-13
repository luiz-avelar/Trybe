let gross_salary = 3000;

if (gross_salary <= 1556.95){
    inss = gross_salary * 0.08;
} else if (gross_salary <= 2594.82){
    inss = gross_salary * 0.09;
} else if (gross_salary <= 5189.82){
    inss = gross_salary * 0.11;
} else {
    inss = 570.88;
}

let base_salary = gross_salary - inss

if (base_salary <= 1903.98){
    ir = 0;
} else if (base_salary <= 2826.65){
    ir = base_salary * 0.075 - 142.8;
} else if (base_salary <= 3751.05){
    ir = base_salary * 0.15 - 354.8;
} else if (base_salary <= 4664.68){
    ir = base_salary * 0.225 - 636.13;
} else {
    ir = base_salary * 0.275 - 869.36;
}

let net_salary = base_salary - ir;

console.log(net_salary.toFixed(2))
