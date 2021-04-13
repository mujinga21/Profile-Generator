//generate the html pages
const makeTeam = team => team {
    //a method for a template to render manager info
    //a method for a template to render engineer info
    //a method for a template to render intern  info
}
const generateTeam = team => {
    const  generateManager = manager = {
        return `${manager.getName()} etc etc`
    }
    const html = [];
        html.push(team
            .filter(employee => employee.getRole() === "Manager")
            .map(manager => generateManager(manager))
        );
        return html.join("");
    }
    const  generateEngineer = engineer = {
        return `${engineer.getName()} etc etc`
    }
    const html = [];
        html.push(team
            .filter(employee => employee.getRole() === "engineer")
            .map(engineer => generateEngineer(engineer))
        );
        return html.join("");
    }
    const  generateIntern = Intern = {
        return `${intern.getName()} etc etc`
    }
    const html = [];
        html.push(team
            .filter(employee => employee.getRole() === "Intern")
            .map(intern => generateIntern(Intern))
        );
        return html.join("");
    }


//we are exporting out an anonymous function
module.exports = team => {
    return`
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
  
    

    your method goes here.  make it here and copy and past it into the return function.  the cards of manager, intern and engineer goes here.
    ${somefunction(team)}
</body>
</html>

}