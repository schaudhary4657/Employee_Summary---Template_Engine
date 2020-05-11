// Code to define and export the Intern class

const Employee = require("./Employee");

// Extends the Employee class

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    };
    getSchool() {
        return this.school;
    };
    getRole() {
        return "Intern";
    };
}

// Export Intern Class

module.exports = Intern;