///<reference types ="cypress"/>
const LOCATORS = require('../fixtures/locators.json')

//Log In
Cypress.Commands.add("logIn", (data)=>{
    cy.get(LOCATORS.userName).type(data.username);
    expect(data.username).not.be.empty;
    cy.get(LOCATORS.password).type(data.password, {log: false});
    expect(data.password).not.be.empty;
    cy.screenshot('SD001', {blackout:[LOCATORS.password]})
    cy.get(LOCATORS.logInButton).click();
});

//Header
Cypress.Commands.add('headerMenu', ()=>{
    cy.get(LOCATORS.openMenu).click();
    cy.get(LOCATORS.checkMenu).should('be.visible');
});

Cypress.Commands.add('allItems', {prevSubject: 'headerMenu'}, ()=>{
    cy.get(LOCATORS.menuItems.allItems).click();
    cy.url().should('include', 'inventory')
});

Cypress.Commands.add('logOut',{ prevSubject: 'headerMenu'}, ()=>{
    cy.get(LOCATORS.menuItems.logOut).click();
    cy.get(LOCATORS.checkMenu).should('not.be.visible');
});

Cypress.Commands.add('resetApp', {prevSubject:'headerMenu'}, ()=>{
    cy.get(LOCATORS.menuItems.resetApp).click();
    cy.get(LOCATORS.menuItems.closeMenu).click();

})

Cypress.Commands.add('sortProductsBy', (option, first_item)=>{
    switch(option){
        case 1:
            option = 'az'
            break
        case 2:
            option = 'za'           
            break
        case 3:
            option = 'lohi'           
            break
        case 4:
            option = 'hilo'
            break
    };
    cy.get(LOCATORS.sortContainer)
    .select(option)
    .then((e)=>{
        expect(e).to.have.value(option);
    });
    cy.get(LOCATORS.firstItem)
    .should('have.text', first_item)
});

//Body
Cypress.Commands.add('addProduct', (product)=>{
    cy.get(`:nth-child(${product}) ${LOCATORS.addProduct}`)
    .should('have.text', 'ADD TO CART')
    .click()
    .should('have.text', 'REMOVE');
});

Cypress.Commands.add('deleteProduct', (product)=>{
    product += 2
    cy.get(`:nth-child(${product}) ${LOCATORS.deleteProduct}`).click();
});
