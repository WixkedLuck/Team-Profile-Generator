class Employee{
    constructor(Name, id, Email, Office) {
        this.Name = Name;
        this.id = id;
        this.Email = Email;
        this.Office = Office;
        
    }
    getName() { return this.Name; }
    getId(){return this.id;}
    getEmail () { return this.Email; }
    getRole() {return 'Employee'}; 
}

module.exports = Employee; 