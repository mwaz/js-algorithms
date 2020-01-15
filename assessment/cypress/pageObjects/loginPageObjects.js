const elements = {
loginButton: () => cy.get('#react-root > div > div > div > main > div > div > form > div > div:nth-child(8) > div > div'),
usernameField: () => cy.get('#react-root > div > div > div > main > div > div > form > div > div:nth-child(6) > label > div.css-1dbjc4n.r-18u37iz.r-16y2uox.r-1wbh5a2.r-1udh08x > div > input'),
passwordield: () => cy.get('#react-root > div > div > div > main > div > div > form > div > div:nth-child(7) > label > div.css-1dbjc4n.r-18u37iz.r-16y2uox.r-1wbh5a2.r-1udh08x > div > input')
};

const expects = {

};

const actions = {
    clickLoginButton: () => {
        elements.loginButton().click({ force : true });
    }

};

module.exports = {
    elements,
    actions,
    expects
}