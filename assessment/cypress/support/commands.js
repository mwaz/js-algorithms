// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add("login", (email, password) => {  
    cy.server();
    cy.wait(1000);
    cy.get('#react-root > div > div > div > main > div > div > div > div:nth-child(1) > div.css-1dbjc4n.r-1kihuf0.r-17w48nw > a.css-4rbku5.css-18t94o4.css-1dbjc4n.r-1niwhzg.r-p1n3y5.r-sdzlij.r-1phboty.r-rs99b7.r-1loqt21.r-1w2pmg.r-ku1wi2.r-1vuscfd.r-1dhvaqw.r-1fneopy.r-o7ynqc.r-6416eg.r-lrvibr > div', {timeout : 10000}).then($username => {
        if($username){
            cy.get('#react-root > div > div > div > main > div > div > div > div:nth-child(1) > div.css-1dbjc4n.r-1kihuf0.r-17w48nw > a.css-4rbku5.css-18t94o4.css-1dbjc4n.r-1niwhzg.r-p1n3y5.r-sdzlij.r-1phboty.r-rs99b7.r-1loqt21.r-1w2pmg.r-ku1wi2.r-1vuscfd.r-1dhvaqw.r-1fneopy.r-o7ynqc.r-6416eg.r-lrvibr > div').click();
            cy.get('#react-root > div > div > div > main > div > div > form > div > div:nth-child(6) > label > div.css-1dbjc4n.r-18u37iz.r-16y2uox.r-1wbh5a2.r-1udh08x > div > input').type(email, {force : true});
            cy.get('#react-root > div > div > div > main > div > div > form > div > div:nth-child(7) > label > div.css-1dbjc4n.r-18u37iz.r-16y2uox.r-1wbh5a2.r-1udh08x > div > input').type(password, {force : true})
            cy.get('#react-root > div > div > div > main > div > div > form > div > div:nth-child(8) > div > div').click({force: true});
        }
    });
    cy.wait(4000);
});


Cypress.Commands.add("logout", () => {
    cy.visit('https://twitter.com/logout');
    cy.get('.css-901oao r-1awozwy r-jwli3a r-6koalj r-18u37iz r-16y2uox r-1qd0xha r-a023e6 r-vw2c0b r-1777fci r-eljoum r-dnmrzs r-bcqeeo r-q4m81j r-qvutc0').click({ force: true });
});

//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
