const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const employees = [];

function createTeam() {
    inquirer
        .prompt([

            {
                type: "list",
                name: "teamMember",
                message: "What type of team member you want to add?",
                choices: [
                    "Manager",
                    "Engineer",
                    "Intern",
                    "Don't add any more team members"
                ]
            }

        ]).then(answer => {
            // pass in the variable
            switch (answer.teamMember) {
                // in case answer
                case "Manager":
                    addManager();
                    break;

                case "Engineer":
                    addEngineer();
                    break;

                case "Intern":
                    addIntern();
                    break;

                case "Don't add any more team members":
                    render(employees);
                    break;
            }

        });


    function addManager() {
        inquirer
            .prompt([

                {
                    type: "input",
                    name: "managerName",
                    message: "Enter the name of the Manager:"
                },
                {
                    type: "input",
                    name: "managerId",
                    message: "Enter the ID of the Manager:"
                },
                {
                    type: "input",
                    name: "managerEmail",
                    message: "Enter the email of the Manager:"
                },
                {
                    type: "input",
                    name: "managerOfficeNumber",
                    message: "Enter the office number of the Manager:"
                }

            ]).then(answer => {
                const manager = new Manager(answer.managerName, answer.managerId, answer.managerEmail, answer.managerOfficeNumber);

                employees.push(manager);

                createTeam();
            });
    }

    function addEngineer() {
        inquirer
            .prompt([

                {
                    type: "input",
                    name: "engineerName",
                    message: "Enter the name of the engineer:"
                },
                {
                    type: "input",
                    name: "engineerId",
                    message: "Enter the ID of the engineer:"
                },
                {
                    type: "input",
                    name: "engineerEmail",
                    message: "Enter the email of the engineer:"
                },
                {
                    type: "input",
                    name: "gitHubUsername",
                    message: "Enter the Github username of the engineer:"
                }
            ]).then(answer => {

                const engineer = new Engineer(answer.engineerName, answer.engineerId, answer.engineerEmail, answer.gitHubUsername);

                employees.push(engineer);

                createTeam();
            });
    }

    function addIntern() {
        inquirer
            .prompt([

                {
                    type: "input",
                    name: "internName",
                    message: "Enter the name of the intern:"
                },
                {
                    type: "input",
                    name: "internId",
                    message: "Enter the ID of the intern:"
                },
                {
                    type: "input",
                    name: "internEmail",
                    message: "Enter the email of the intern:"
                },
                {
                    type: "input",
                    name: "internSchool",
                    message: "Enter the school the intern is attending:"
                }
            ]).then(answer => {

                const intern = new Intern(answer.internName, answer.internId, answer.internEmail, answer.internSchool);

                employees.push(intern);

                createTeam();
            });
    }
}

module.exports = employees;

createTeam();