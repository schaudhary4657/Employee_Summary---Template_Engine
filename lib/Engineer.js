// Code to define and export the Engineer class

const Employee = require("./Employee");

// Extends the Employee class

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    };
    getGithub() {
        return this.github;
    };
    getRole() {
        return "Engineer";
    };
}

// Export Engineer Class

module.exports = Engineer;
