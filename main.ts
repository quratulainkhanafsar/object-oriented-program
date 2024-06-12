#! \usr\bin\env node 

import inquirer from "inquirer";
import chalk from "chalk";

class Student {
    name : string
    constructor (n:string){
        this.name = n
    }
}

class Person {
    students:Student[] = []

    addStudent(obj:Student){
        this.students.push(obj)
    }
}

const Persons = new Person()

const programmStart = async (Persons:Person)  => {
    do{  
    console.log(chalk.bold.red("*".repeat(50)));
    console.log(chalk.bold.blueBright("\t <<< Welcome Guest! >>> \t"));
    console.log(chalk.bold.red("*".repeat(50)));

const ans = await inquirer.prompt(
    {
        type: "list",
        name: "select", 
        message: chalk.bold.bgCyan("Who's do you want to talk?"),
        choices: ["Self", "Student"],
});

if(ans.select == "Self"){
console.log(chalk.bold.yellowBright("\nHello! am talking with my-self "));
console.log(chalk.bold.yellowBright("I am good."));
}

if(ans.select == "Student"){
const ans = await inquirer.prompt(
    {
        type: "input",
        name: "Student",
        message: chalk.bold.bgWhite("Whom student do you want to talk?"),
});

const student = Persons.students.find(val => val.name == ans.Student)

if (!student){
    const name = new Student (ans.Student)
    Persons.addStudent(name)

    console.log(chalk.bold.greenBright(`Hello! I am ${name.name}, and I am fine.`));
    console.log(Persons.students);  
}

if (student){
    console.log(chalk.bold.greenBright(`Hello! I am ${student.name} and I am fine......`));
    
}
}
   
}
while(true)
};

programmStart(Persons);








