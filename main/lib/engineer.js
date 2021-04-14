// Extend from Employee
const Employee = require('../lib/engineer');
class Engineer extends Employee{
    constructor(name, id, email, github) {
        super(name, id, email)
      this.github = github;
      this.role = "Engineer"
    }
    getGitHub(){return this.github}


    // printInfo() {
    //   console.log(`This employee name is ${this.name}`);
    //   console.log(`This employee id is ${this.id}`);
    //   console.log(`This employee email is ${this.email}`); 
    // }
  }
  module.exports = engineer;
