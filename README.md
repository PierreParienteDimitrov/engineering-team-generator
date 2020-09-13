# Engineering Team Generator

## Description

This CLI application allows the user to create a engineering team and display it on a webpage. The users first choses if he wants to create a team member. If he selects yes, then he is prompted to chose what kind of employee to create: a Manager, Engineer, Intern. The user can only creates one Manager for teh whole team, and as many engineers and interns he wants.

Depending on the employee that the user decided to create, he will be asked a set of specific questions.

When all employees have been created and the user decides to not create another one, then the webpage is created with the relevant information.

Here is the link to the [GitHub Pages](https://pierreparientedimitrov.github.io/engineering-team-generator/)
Here is the link to the [Repository](https://github.com/PierreParienteDimitrov/engineering-team-generator)

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Test](#test)
- [License](#license)

## Installation

Download the zip file or clone the project to your machine. Then run npm install to download the dependencies (inquirer and jest)

```terminal
npm install
```

## Usage

To run the application, clone the repository, move to the 'Develop' folder and run this command:

```terminal
node app.js
```

## Test

This application comes with a test folder and a set of tests to ensure that the classes work properly and return the right value. To run the test, just run the following command line INSIDE the /Develop folder:

```terminal
npm run test
```

## License

MIT License
