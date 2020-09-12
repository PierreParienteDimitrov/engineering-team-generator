const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const employeeArr = ['Engineer', 'Intern', 'Manager']
const allEmployees = []


start()

// User choses or not to create an element
function addEmployee() {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'confirm',
            message: 'Do you want to add an employee?',
            choices: ['yes', 'no']
        },
    ])
}

// Choose employee
function choseEmployee() {
    return inquirer.prompt([
        {
            type: 'rawlist',
            name: 'confirm',
            message: 'Chose the type of employee you want to create:',
            choices: employeeArr
        },
    ])
}

// Employee questions 
function employeeQuestions(employee) {
    return inquirer.prompt([
        {
            type: 'Input',
            message: `What is the ${employee} first and last name?`,
            name: 'name',
        },
        {
            type: 'Input',
            message: `What is the ${employee} id?`,
            name: 'id',
        },
        {
            type: 'Input',
            message: `What is the ${employee} email?`,
            name: 'email',
        },
    ])
}

// Manager questions 
function managerQuestions(employee) {
    const questions = inquirer.prompt([
        {
            type: 'Input',
            message: `What is the ${employee} office number?`,
            name: 'office',
        },
    ])

    return questions
}

// Manager questions 
function engineerQuestions(employee) {
    const questions = inquirer.prompt([
        {
            type: 'Input',
            message: `What is the ${employee} github url?`,
            name: 'github',
        },
    ])

    return questions
}

// Intern questions 
function internQuestions(employee) {
    const questions = inquirer.prompt([
        {
            type: 'Input',
            message: `What is the ${employee} school?`,
            name: 'school',
        },
    ])

    return questions
}

// Render HTML
function renderHTML() {
    fs.writeFile(outputPath, render(allEmployees), (err) => console.log(err))
}

// Starts the game if user choses Yes
async function start() {
    try {
        const confirm = await addEmployee()

        if (confirm.confirm === 'yes') {
            console.log("Chose an employee")
            filterEmployee()
        } else if (confirm.confirm === 'no') {
            console.log("You finished adding all of your employees. The page is loading.")
            renderHTML()
        }
    }

    catch (err) {
        console.log(err)
    }
}

// Filters the chosen employee
async function filterEmployee() {
    try {
        const chosenEmployee = await choseEmployee()
        const employee = chosenEmployee.confirm

        console.log(typeof (employee))
        console.log(employee)

        switch (employee) {
            case 'Engineer':
                console.log('engineer')
                writeEngineer(employee)

                break;
            case 'Manager':
                writeManager(employee)
                break;
            case 'Intern':
                writeManager(employee)
                break;
        }

        // console.log(employee)

        // const engineer = employeeArr.filter(item => item === employee)
        // const intern = employeeArr.filter(item => item === employee)
        // const manager = employeeArr.filter(item => item === employee)

        // if (engineer.length === 1) {
        //     writeEngineer(employee)
        // } else if (intern.length === 1) {
        //     writeIntern(employee)
        // } else if (manager.length === 1) {
        //     writeManager(employee)
        // }
    }

    catch (err) {
        console.log(err)
    }
}

// Write Manager
async function writeManager(employee) {
    try {
        const employeeRes = await employeeQuestions()
        const managerRes = await managerQuestions()

        const newManager = new Manager(employeeRes.name, employeeRes.id, employeeRes.email, managerRes.office)

        allEmployees.push(newManager)

        employeeArr.splice(2)

        start()
    }

    catch (err) {
        console.log(err)
    }
}

// Write Engineer
async function writeEngineer(employee) {
    try {
        const employeeRes = await employeeQuestions(employee)
        const engineerRes = await engineerQuestions(employee)

        const newEngineer = new Engineer(employeeRes.name, employeeRes.id, employeeRes.email, engineerRes.github)

        allEmployees.push(newEngineer)

        start()
    }

    catch (err) {
        console.log(err)
    }
}

// Write Intern
async function writeIntern(employee) {
    try {
        const employeeRes = await employeeQuestions(employee)
        const internRes = await internQuestions(employee)

        const newIntern = new Intern(employeeRes.name, employeeRes.id, employeeRes.email, internRes.github)

        allEmployees.push(newIntern)

        start()
    }

    catch (err) {
        console.log(err)
    }
}






// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
