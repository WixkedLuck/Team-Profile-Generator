const inquirer = require('inquirer');
const fs = require('fs');
const jest = require('jest');
const path =require('path');

const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');

const Directory = path.resolve(__dirname,'dist');
const Out =path.join(Directory, 'index.html');
const render =require('./src/template.js'); 

const teamArray = [];

function Start() {

    function addManager() {
        console.log('Welcome! Time to build your team :)');
        inquirer.prompt([{
            type: 'input',
            name: 'managerName',
            message: 'Please enter the managers name: ',
        },
        {
            type: 'number',
            name: 'managerId',
            message: 'What is the managers Id?',
           
        },
        {
            type: "input",
            name: "managerEmail",
            message: "What is the manager's email?",
        },
        {
            type: 'number',
            name: 'officeNumber',
            message: 'What is the managers office number?',
           
        },

        ]).then((answers) => {
            const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.officeNumber);
            teamArray.push(manager);
            addteam();
        });

    }

    function addteam() {
        inquirer.prompt([
            {
                type: 'list',
                name: 'pickJob',
                message: "Chose a job title you'd like to add or end program ",
                choices: [
                    'Engineer',
                    'Intern',
                    'End Program',

                ]
            }
        ]).then(buildTeam => {
            switch (buildTeam.pickJob) {
                case 'Engineer':
                    addEngineer();
                    break;
                case 'Intern':
                    addIntern();
                    break;
                default:
                    writeToFile();
            }
        })
    }
    function addEngineer() {
        inquirer.prompt([
            {
                type: 'input',
                name: 'engineerName',
                message: "Please enter engineer's name ",
            },
            {
                type: 'number',
                name: 'engineerId',
                message: "Please enter engineer's id ",
           
            },
            {
                type: "input",
                name: "engineerEmail",
                message: "What is the engineer's email?",
            },
            {
                type: "input",
                name: "engineerGithub",
                message: "What is the engineer's Github username?",
            },


        ]).then(answers =>{
            const engineer =new Engineer(answers.engineerName,answers.engineerId,answers.engineerEmail,answers.engineerGithub);
            teamArray.push(engineer);
            addteam();
        });
    }

    function addIntern() {
        inquirer.prompt([
            {
                type: 'input',
                name: 'internName',
                message: "Please enter intern's name ", 
            },
            {
                type: 'number',
                name: 'internId',
                message: "Please enter intern's id ",
             
            },
            {
                type: "input",
                name: "internEmail",
                message: "What is the intern's email? ",
            },
            {
                type: "input",
                name: "School",
                message: "What school does the intern attend?",
            },

        ]).then((answers) =>{
            const intern = new Intern(answers.internName,answers.internId,answers.internEmail,answers.School);
            teamArray.push(intern);
            addteam();
        });
    }
    function writeToFile(){
        if(!fs.existsSync(Directory)){
            fs.mkdirSync(Directory); 
        }
        console.log('Creating Team Profile Page..');
        fs.writeFileSync(Out, render(teamArray),'utf-8'); 

    }
    addManager();


}
Start();