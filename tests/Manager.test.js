const {test, expect} = require('@jest/globals');
const Manager = require('../lib/Manager'); 

test('Create Manager', () => {
    const name='Sam'; 
    const manager = new Manager('Sam'); 
    expect(manager.getName()).toBe(name);
});

test('GetID', () =>{
    const num=1713;
    const manager = new Manager('Sam',num); 
    expect(manager.getId()).toBe(num);  

});

test('get Email', () =>{
    const email='UomEmail@gmail.com';
    const manager = new Manager('Sam',12,email);
    expect(manager.getEmail()).toBe(email); 
});

test('get Role', () => {
    const role= 'Manager';
    const manager = new Manager('Sam',2,'Email', "github"); 
    expect(manager.getRole()).toBe(role); 
});