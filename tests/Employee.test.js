const {test, expect} = require('@jest/globals');
const Employee = require('../lib/Employee');

test('Create Employee', () => {
    const name='Sam'; 
    const employee = new Employee('Sam'); 
    expect(employee.getName()).toBe(name);
});

test('GetID', () =>{
    const num=1713;
    const employee = new Employee('Sam',num); 
    expect(employee.getId()).toBe(num);  

});

test(' get Email', () =>{
    const email='UomEmail@gmail.com';
    const employee = new Employee('Sam',12,email);
    expect(employee.getEmail()).toBe(email); 
});
