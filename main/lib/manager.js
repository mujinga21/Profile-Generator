const Employee = require('./employee.js');
class Manager extends Employee{
    constructor(name, id, email, office) {
        super(name, id, email)
      this.office = office;
      this.role = "Manager"
    }
    getOffice(){return this.office}


    // printInfo() {
    //   console.log(`This employee name is ${this.name}`);
    //   console.log(`This employee id is ${this.id}`);
    //   console.log(`This employee email is ${this.email}`); 
    // }
  }
  module.exports = Manager;