//this is where the main logic lie

//you will first require all of the titles and nodes packages needed
//engineer, Manager, Intern,
//require that page-template.js
//we are receiving that anonymous function
//giving the name pageTemplate
const pageTemplate = require(`./src/page-template.js`);
//and now, we can use that pagetemplete as a function, which can accept a a parameter
pageTemplate(answers_from_inquirere_prompt);
// and now, we can use that pageTemplate as a function, which can Accept a parameter
//index files are considered the entry point to your application
//if this is your entry point, you must do your inquirer here
//this is where you do your FS write file stuff
// the dist folder is where the output html files will land