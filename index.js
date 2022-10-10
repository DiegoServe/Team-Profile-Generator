// Inquirer & File System
const inquirer = require('inquirer');
const fs = require('fs');

// require classes
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const { addListener } = require('process');

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
        .prompt([
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
                Name: 'next employee',
                type: 'confirm',
                message: "Would you like to add another employee?",
            },
        ])

        // capture responses and create new manager
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

// if add new member is chosen, prompt for engineer, intern or "finish" will appear
// if finish is chosen, render to existing team
function newMember() {
    inquirer
        .prompt([
                {
            name: 'empType',
            type: 'list',
            message: 'Please select member position:',
            choices: ['Engineer', 'Intern', 'Finish Team']
                },
        ])
        .then((res, err) =>{
            if (err) console.error(err);
            switch (res.empType) {
                case 'Engineer':
                    addEngineer();
                    break;
                    case 'Intern':
                        addListener();
                        break;
                        case 'Finish Team':
                            renderTeam();
            }
        });
}

// Data for engineer
function addEngineer() {
	inquirer
		.prompt([
			{
				name: 'name',
				type: 'input',
				message: "What is the Engineer's name?",
				validate: (input) => {
					if (input) {
						return true;
					} else {
						console.log("Please enter the Engineer's name!");
						return false;
					}
				},
			},
            {
				name: 'id',
				type: 'input',
				message: "Enter the Engineer's Employee ID number:",
				validate: (input) => {
					if (input) {
						return true;
					} else {
						console.log("Please enter the Engineer's Employee ID number!");
						return false;
					}
				},
			},
            {
				name: 'email',
				type: 'input',
				message: "Enter the Engineer's email address:",
				validate: (input) => {
					if (input) {
						return true;
					} else {
						console.log("Please enter the Engineer's email address");
						return false;
					}
				},
			},	
            {
				name: 'gitHub',
				type: 'input',
				message: "Enter the Engineer's GitHub username:",
				validate: (input) => {
					if (input) {
						return true;
					} else {
						console.log("Please enter the Engineer's GitHub username!");
						return false;
					}
				},
			},
			{
				name: 'nextEmp',
				type: 'confirm',
				message: 'Would you like to add another employee?',
			},
        ])
        .then((res, err) => {
			if (err) console.error(err);
			const newEngineer = new Engineer(
				res.name,
				res.id,
				res.email,
				res.gitHub
			);
			employees.push(newEngineer);
			if (res.nextEmp) {
				newMember();
			} else {
				renderTeam();
			}
		});
}

			



// Start App!
startApp();