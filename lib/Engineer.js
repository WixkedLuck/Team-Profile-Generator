const Manager = require('./Manager'); 

class Engineer extends Manager{
    constructor(Name,id,Email,Github){
        super(Name,id,Email);
        this.Github = Github;
    }
    getGithub() {return this.Github;}
    getRole() {return 'Engineer';}
}


module.exports=Engineer; 