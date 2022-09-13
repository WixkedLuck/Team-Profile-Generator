const Employee = require('./Employee'); 

class Engineer extends Employee{
    constructor(Name,id,Email,Github){
        super(Name,id,Email);
        this.Github = Github;
    }
    getGithub() {return this.Github;}
    getRole() {return 'Engineer';}
}


module.exports=Engineer; 