// Inquirer & File System
const inquirer = require('inquirer');
const fs = require('fs');

// require classes
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

// empty array for employee objects
const employee = [];

// prompt to start team or exit
function startApp() {
    inquirer
        .prompt([
            {
                name: 'startApp',
                type: 'confirm',
                message: 'Would you like to assemble a team?',
            },
        ])
        .then((res, err) => {
            if (err) console.error(err);
            if (res.startApp) {
                addManager();
            } else {
                process.exit();
            }
        });
}

// add info for manager
// validation for every prompt
function addManager() {
    inquirer
    .prompt ([
        {
            name: 'name',
            type: 'input',
            message: "Please enter the Manager's name:",
            validate: (input) => {
                if (input) {
                    return true;
                } else {
                    console.log("Please enter the Manager's name");
                    return false;
                }
            }
        },
        {
            name: 'email',
            type: 'iput',
            message: "Please enter Manager's email:",
            validate: (input) => {
                if (input) {
                    return true;
                } else {
                    console.group("Please enter Manager's email");
                    return false;
                }
            }
        },
        {
            name: 'id',
            type: 'input',
            message: "Please enter Manager's ID number:",
            validate: (input) => {
                if (input) {
                    return true;
                } else {
                    console.log("Please enter Manager's ID number")
                    return false;
                }
            }
        },
        {
            Name:'next employee',
            type: 'confirm',
            message: "Would you like to add another employee?",
        },
    ])

    // capture respnses and create new manager
    .then((res, err) => {
        if (err) console.error(err);
        const newManager = new Manager(
            res.name,
            res.id,
            res.email,
        );
        // push new manager to employees array
        employees.push(newManager);

        if (res.nextEmp) {
            newMember();
        } else {
            console.log(employees);
            renderTeam();
        }
    });
}

// Start App!
startApp();