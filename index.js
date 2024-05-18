const pool = require("./db/connection")
const inquirer = require("inquirer")
function menu() {
    inquirer.prompt([{
        type: "list", name: "choice", message: "what would you like to do?",
        choices: ["view all departments", "view all roles", "view all employees", "add a department", "add a role", "add an employee", "update an employee role", "quit"]

    }]).then(({choice})=>{
if(choice === "view all departments") viewDepartments()
    else if(choice==="view all roles") viewRoles()
else if(choice==="view all employees") viewEmployees()
    else if(choice==="add a department") addDepartment()
else if(choice==="add a role")

    })

}