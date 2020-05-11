// Code to define and export the Manager class

const Employee = require("./Employee");

// Extends the Employee class

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    };
    getOfficeNumber() {
        return this.officeNumber;
    };
    getRole() {
        return "Manager";
    };
}

// Export Manager Class

module.exports = Manager;