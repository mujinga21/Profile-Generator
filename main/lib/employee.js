// THIS IS THE MAIN CLASS BECAUSE ALL ENGINEERS, INTERNS, AND MANAGERS ARE A SUB CLASS OF EMPLOYEE
class Employee {
    constructor(name, id, email) {
      this.name = name;
      this.id = id;
      this.email = email;
      this.role = "employee"
    }
  getName(){return this.name}
  getId(){return this.id}
  getEmail(){return this.email}

    printInfo() {
      console.log(`This employee name is ${this.name}`);
      console.log(`This employee id is ${this.id}`);
      console.log(`This employee email is ${this.email}`); 
    }
  }
  module.exports = Employee;
