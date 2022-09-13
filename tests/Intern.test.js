const {test, expect} = require('@jest/globals');
const Intern = require('../lib/Intern');

test('Create Intern', () => {
    const name='Jermy'; 
    const intern= new Intern('Jermy');
    expect(intern.getName()).toBe(name);
});

test('GetID', () =>{
    const num=1713;
    const intern = new Intern('Sam',num); 
    expect(intern.getId()).toBe(num);  

});

test(' get Email', () =>{
    const email='UomEmail@gmail.com';
    const intern = new Intern('Sam',12,email);
    expect(intern.getEmail()).toBe(email); 
});

test(' get School', () =>{
    const school='U of M';
    const intern = new Intern('Sam',12,'email', school);
    expect(intern.getSchool()).toBe(school); 
});