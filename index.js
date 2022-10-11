
// Node Modules
const fs = require('fs'); 
const inquirer = require('inquirer');

// Generate HTML
const generateHTML = require('./src/generateHTML');

// team profiles
const Employee = require('./lib/Employee')
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern'); 

//import layout template file
const generateTemplate = require('');

// team array
const teamMembers = []; 

function userInfo() {
    inquirer.prompt([
        {
            type: 'input',
            message: 'Enter Employee Name: ',
            name: 'name',
            validate: function (nameInput) {
                if (nameInput) {
                    return true;
                } else {
                    return 'Please enter Employee Name.';
                }
            }
        },
