const Manager = require('./Manager');

class Intern extends Manager{
    constructor(Name,id,Email,School){
        super(Name,id,Email);
        this.School = School; 
    }
    getSchool() {return this.School;}

    getRole() {return 'Intern'}; 
}


module.exports = Intern;