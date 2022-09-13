const {test, expect} = require('@jest/globals');
const Engineer = require('../lib/Engineer.js');

test('Create Engineer', () => {
    const engineer = new Engineer('Sam'); 
    expect(engineer.getName).toBe(engineer);
})

test('GetID', () =>{
    const num=1713;
    const engineer = new Engineer('Sam',num); 
    expect(engineer.getId()).toBe(num);  

})

test(' get Email'), () =>{
    const email='UomEmail@gmail.com';
    const engineer = new Engineer('Sam',12,email);
    expect(engineer.getEmail()).toBe(email); 
}

test('get Github'), () => {
    const github= 'Sassy';
    const engineer = new Engineer('Sam',2,'Email',github); 
    expect(engineer.getGithub()).toBe(github); 
}