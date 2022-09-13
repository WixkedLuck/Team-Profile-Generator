
module.exports = team => {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossorigin="anonymous">
    <link rel="stylesheet" href="./style.css">
    <title>Team Generator</title>
</head>
<body style="background-color: #021226">
    <nav class="navbar navbar-dark" style="background-color: #021226">
        <div class="container-fluid">
          <span class="navbar-brand  h1 ">My Team <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clipboard-data" viewBox="0 0 16 16">
            <path d="M4 11a1 1 0 1 1 2 0v1a1 1 0 1 1-2 0v-1zm6-4a1 1 0 1 1 2 0v5a1 1 0 1 1-2 0V7zM7 9a1 1 0 0 1 2 0v3a1 1 0 1 1-2 0V9z"/>
            <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/>
            <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/>
          </svg></span>
        </div>
      </nav>
      <div class="row">
      ${createPage(team)}
      </div>
      </body>
      </html>  
`

};

const createPage = team => {

    const createManager = manager => {
        return `
        <!-- Manager -->
<div class="row">
<div class="card text-center" style="width: 24rem;  background-color: #C6D93B;">
   
    <div class="card-body" style="background-color: #4E458C">
      <h5 class="card-title">${manager.getName()} <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-building" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022zM6 8.694 1 10.36V15h5V8.694zM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5V15z"/>
        <path d="M2 11h1v1H2v-1zm2 0h1v1H4v-1zm-2 2h1v1H2v-1zm2 0h1v1H4v-1zm4-4h1v1H8V9zm2 0h1v1h-1V9zm-2 2h1v1H8v-1zm2 0h1v1h-1v-1zm2-2h1v1h-1V9zm0 2h1v1h-1v-1zM8 7h1v1H8V7zm2 0h1v1h-1V7zm2 0h1v1h-1V7zM8 5h1v1H8V5zm2 0h1v1h-1V5zm2 0h1v1h-1V5zm0-2h1v1h-1V3z"/>
      </svg></h5>
      <p class="card-text">Manager</p>
    </div>
    <ul class="list-group list-group-flush" >
      <li class="list-group-item" style="background-color: #A9A7D9">Id: ${manager.getId()} </li>
      <li class="list-group-item" style="background-color: #A9A7D9">Email: ${manager.getEmail()}</li>
      <li class="list-group-item" style="background-color: #A9A7D9">Office #${manager.getOffice()}</li>
    </ul>
    <div class="card-body" style="background-color: #A9A7D9">
    <a href="mailto:${manager.getEmail()}"  class="card-link">${manager.getEmail()}</a>
    </div>
  </div>

        
        
        
        `
    };

    const createEngineer = engineer => {
        return `
    <!-- Engineer -->
  <div class="card text-center" style="width: 24rem; background-color: #C6D93B;">
   
    <div class="card-body" style="background-color: #4E458C">
      <h5 class="card-title">${engineer.getName()}<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bug-fill" viewBox="0 0 16 16">
        <path d="M4.978.855a.5.5 0 1 0-.956.29l.41 1.352A4.985 4.985 0 0 0 3 6h10a4.985 4.985 0 0 0-1.432-3.503l.41-1.352a.5.5 0 1 0-.956-.29l-.291.956A4.978 4.978 0 0 0 8 1a4.979 4.979 0 0 0-2.731.811l-.29-.956z"/>
        <path d="M13 6v1H8.5v8.975A5 5 0 0 0 13 11h.5a.5.5 0 0 1 .5.5v.5a.5.5 0 1 0 1 0v-.5a1.5 1.5 0 0 0-1.5-1.5H13V9h1.5a.5.5 0 0 0 0-1H13V7h.5A1.5 1.5 0 0 0 15 5.5V5a.5.5 0 0 0-1 0v.5a.5.5 0 0 1-.5.5H13zm-5.5 9.975V7H3V6h-.5a.5.5 0 0 1-.5-.5V5a.5.5 0 0 0-1 0v.5A1.5 1.5 0 0 0 2.5 7H3v1H1.5a.5.5 0 0 0 0 1H3v1h-.5A1.5 1.5 0 0 0 1 11.5v.5a.5.5 0 1 0 1 0v-.5a.5.5 0 0 1 .5-.5H3a5 5 0 0 0 4.5 4.975z"/>
      </svg></h5>
      <p class="card-text">Engineer</p>
    </div>
    <ul class="list-group list-group-flush" >
      <li class="list-group-item" style="background-color: #A9A7D9">Id: ${engineer.getId()} </li>
      <li class="list-group-item" style="background-color: #A9A7D9">Email: <a href=mailto:${engineer.getEmail()}></a>${engineer.getEmail()}  </li>
      <li class="list-group-item" style="background-color: #A9A7D9">Username: ${engineer.getGithub()} </li>
    </ul>
    <div class="card-body" style="background-color: #A9A7D9">
      <a href="https://github.com/${engineer.getGithub()}" target="_blank" class="card-link">Github</a>
      <a href="mailto:${engineer.getEmail()}"  class="card-link">${engineer.getEmail()}</a>
    </div>
  </div>
  `
    };

    const createIntern = intern => {
        return `
<!-- Intern -->
 <div class="card text-center" style="width: 24rem; background-color: #C6D93B;">
   
    <div class="card-body" style="background-color: #4E458C">
      <h5 class="card-title">${intern.getName()} <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bank2" viewBox="0 0 16 16">
        <path d="M8.277.084a.5.5 0 0 0-.554 0l-7.5 5A.5.5 0 0 0 .5 6h1.875v7H1.5a.5.5 0 0 0 0 1h13a.5.5 0 1 0 0-1h-.875V6H15.5a.5.5 0 0 0 .277-.916l-7.5-5zM12.375 6v7h-1.25V6h1.25zm-2.5 0v7h-1.25V6h1.25zm-2.5 0v7h-1.25V6h1.25zm-2.5 0v7h-1.25V6h1.25zM8 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2zM.5 15a.5.5 0 0 0 0 1h15a.5.5 0 1 0 0-1H.5z"/>
      </svg></h5>
      <p class="card-text">Intern</p>
    </div>
    <ul class="list-group list-group-flush" >
      <li class="list-group-item" style="background-color: #A9A7D9">Id: ${intern.getId()} </li>
      <li class="list-group-item" style="background-color: #A9A7D9">Email: <a href="mailto:${intern.getEmail()}"></a>${intern.getEmail()} </li>
      <li class="list-group-item" style="background-color: #A9A7D9">School: ${intern.getSchool()}</li>
    </ul>
    <div class="card-body" style="background-color: #A9A7D9">
    <a href="mailto:${intern.getEmail()}"  class="card-link">${intern.getEmail()}</a>
    </div>
  </div>

`
    };

    const html = [];

    html.push(team
        .filter(employee => employee.getRole()=== 'Manager')
        .map(manager => createManager(manager))
    );
    html.push(team
        .filter(employee => employee.getRole()=== 'Engineer')
        .map(engineer => createEngineer(engineer))
        .join("")

    );
    html.push(team
        .filter(employee => employee.getRole()=== 'Intern')
        .map(intern => createIntern(intern))
        .join("")
    );

    return html.join("");



}