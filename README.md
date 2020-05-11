# Employee_Summary---Template_Engine

# About

Employee Summary Template Engine application prompts the user for information about the team manager and then information about the team members. As a user, we can input any number of team members, and they may be a mix of engineers and interns. Once all the team members are logged, the application will create an HTML file that displays a nicely formatted team based on the information provided by the user.


# User Stories

As a manager
I want to generate a webpage that displays my team's basic info
so that I have quick access to emails and GitHub profiles


# Minimum Requirements

• Functional application.

• GitHub repository with a unique name and a README describing the project.

• User can use the CLI to generate an HTML page that displays information about their team.

• All tests must pass.


# Classes

The project must have the these classes: Employee, Manager, Engineer, Intern. The tests for these classes in the tests directory must all pass.

The first class is an Employee parent class with the following properties and methods:

• name
• id
• title
• getName()
• getId()
• getEmail()
• getRole() // Returns 'Employee'

The other three classes will extend Employee.

In addition to Employee's properties and methods, Manager will also have:

• officeNumber

• getRole() // Overridden to return 'Manager'

In addition to Employee's properties and methods, Engineer will also have:

• github // GitHub username

• getGithub()

• getRole() // Overridden to return 'Engineer'

In addition to Employee's properties and methods, Intern will also have:

• school

• getSchool()

• getRole() // Overridden to return 'Intern'


# User Input

The project must prompt the user to build an engineering team. An engineering team consists of a manager, and any number of engineers and interns.


# Output

The project must generate a team.html page in the output directory, that displays a nicely formatted team roster. Each team member should display the following in no particular order:

Name

Role

ID

Role-specific property (School, link to GitHub profile, or office number)


# Guidelines

• Use the Inquirer npm package to prompt the user for their email, id, and specific information based on their role with the company. For instance, an intern may provide their school, whereas an engineer may provide their GitHub username.

• Your app will run as a Node CLI to gather information about each employee.

In the Develop folder, there is a package.json, so make sure to npm install.

The dependencies are, jest for running the provided tests, and inquirer for collecting input from the user.

There are also unit tests to help you build the classes necessary.

It is recommended that you follow this workflow:

1. Run tests
2. Create or update classes to pass a single test case
3. Repeat

🎗 Remember, you can run the tests at any time with npm run test

It is recommended that you start with a directory structure that looks like this:

lib/            // classes and helper code
output/         // rendered output
templates/      // HTML template(s)
test/           // jest tests
    Employee.test.js
    Engineer.test.js
    Intern.test.js
    Manager.test.js
app.js // Runs the application


# Demo - Video

![Demo Video](https://user-images.githubusercontent.com/51222558/81615547-a3c20380-9396-11ea-9769-0740a4902497.gif)
