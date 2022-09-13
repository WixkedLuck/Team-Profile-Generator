
class Manager {
    constructor(Name, id, Email, Office) {
        this.Name = Name;
        this.id = id;
        this.Email = Email;
        this.Office = Office;
    }
    getName() { return this.Name; }
    getId(){return this.id;}
    getEmail () { return this.Email; }
    getOffice () { return this.Office; }
    getRole() {return 'Manager'; }
}


module.exports = Manager; 