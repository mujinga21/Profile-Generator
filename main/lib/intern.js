// Extend from Employee
const Employee = require('../lib/intern');
class Intern extends Employee{
    constructor(name, id, email, school) {
        super(name, id, email)
      this.school = school;
      this.role = "Intern"
    }
    getSchool(){return this.school}


    // printInfo() {
    //   console.log(`This employee name is ${this.name}`);
    //   console.log(`This employee id is ${this.id}`);
    //   console.log(`This employee email is ${this.email}`); 
    // }
  }
  module.exports = intern;
