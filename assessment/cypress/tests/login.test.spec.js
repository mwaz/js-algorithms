import loginPageObjects from '../pageObjects/loginPageObjects';

describe('Login methods of the application',  () => {
    beforeEach(async()=>{
        cy.visit('https://twitter.com');
        cy.login('WaweruWaMwaura', 'Wakanda4ever')

    })
    it('successfully logs in a user', () => {
        // loginPageObjects.actions.clickLoginButton();
        //logs in user
        // cy.wait(4000);
        console.log('nohin');
    })
});