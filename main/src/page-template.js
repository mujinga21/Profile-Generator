//generate the html pages
const makeTeam = team => team {
    //a method for a template to render manager info
    //a method for a template to render engineer info
    //a method for a template to render intern  info

const generateTeam = team => {
    const  generateManager = manager = {
        `return ${manager.getName()} etc etc`
    }
    const html = [];
        html.push(team
            .filter(employee => employee.getRole() === "Manager")
            .map(manager => generateManager(manager))
        );
        return html.join("");
        }
    const  generateEngineer = engineer = {
        `return ${engineer.getName()} etc etc`
    
    const html = [];
        html.push(team
            .filter(employee => employee.getRole() === "engineer")
            .map(engineer => generateEngineer(engineer))
        );
        return html.join("");
    
    const  generateIntern = Intern = {
        `return ${intern.getName()} etc etc`
    }
    const html = [];
        html.push(team
            .filter(employee => employee.getRole() === "Intern")
            .map(intern => generateIntern(Intern))
        );
        return html.join("");
    }
}




//we are exporting out an anonymous function
module.exports = team => {
    return`
    <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css"
    />
    <title>My team</title>
  </head>

  <body>
  
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 mb-3 jumbotron">
          <h1 class="text-center">My Team</h1>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="card-deck">
      <div class="row">
        <div class="card employee">
          <div class="card-header">
            <h2 class="card-title">name is${answers.name}</h2>
            <h3 class="card-title">Manager</h3>
          </div>
          <div class="card-body">
            <ul class="list-group">
              <li class="list-group-item">your id is i${answers.id}</li>
              <li class="list-group-item">your email is${answers.email}</li>
              <li class="list-group-item">what is your office number${answers.office}</li>
            </ul>
          </div>
        </div>
        <div class="card employee">
            <div class="card-header">
              <h2 class="card-title">your name is ${answers.name}</h2>
              <h3 class="card-title">Engineer</h3>
            </div>
            <div class="card-body">
              <ul class="list-group">
                <li class="list-group-item">your id is i${answers.id}</li>
                <li class="list-group-item">your email is${answers.email}</li>
                <li class="list-group-item">what is your GitHub${answers.github}</li>
              </ul>
            </div>
          </div>
          <div class="card employee">
            <div class="card-header">
              <h2 class="card-title">your name is ${answers.name}</h2>
              <h3 class="card-title">Engineer</h3>
            </div>
            <div class="card-body">
              <ul class="list-group">
                <li class="list-group-item">your id is i${answers.id}</li>
                <li class="list-group-item">email: your email is${answers.email}</li>
                <li class="list-group-item">what is your GitHub${answers.github}</li>
              </ul>
            </div>
            ${generateTeam(team)}
          </div>
          </div>
          <div class="card-deck">
          
        <div class="card employee">
          <div class="card-header">
            <h2 class="card-title">your name is ${answers.name}</h2>
            <h3 class="card-title">Engineer</h3>
          </div>
          <div class="card-body">
            <ul class="list-group">
              <li class="list-group-item">your id is i${answers.id}</li>
              <li class="list-group-item">email: your email is${answers.email}</li>
              <li class="list-group-item">what is your GitHub${answers.github}</li>
            </ul>
          </div>
        </div>
        <div class="card employee">
            <div class="card-header">
              <h2 class="card-title">your name is ${answers.name}</h2>
              <h3 class="card-title">intern</h3>
            </div>
            <div class="card-body">
              <ul class="list-group">
                <li class="list-group-item">your id is i${answers.id}</li>
                <li class="list-group-item">email: your email is${answers.email}/li>
                <li class="list-group-item">School: what is your school?${answers.school}</li>
              </ul>
            </div>
            
          </div>
          </div>
          </div>
          </div>
  
  </body>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.slim.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.1/umd/popper.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/js/bootstrap.min.js"></script>
</html>

</body>
</html>

}

}
