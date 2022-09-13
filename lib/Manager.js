const Employee= require('./Employee'); 
class Manager extends Employee{
    constructor(Name, id, Email, Office) {
       super(Name,id,Email);
        this.Office = Office;
    }
  
    getOffice () { return this.Office; }
    getRole() {return 'Manager'; }
}


module.exports = Manager; 