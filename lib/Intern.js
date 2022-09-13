const Employee = require('./Employee');

class Intern extends Employee{
    constructor(Name,id,Email,School){
        super(Name,id,Email);
        this.School = School; 
    }
    getSchool() {return this.School;}

    getRole() {return 'Intern'}; 
}


module.exports = Intern;