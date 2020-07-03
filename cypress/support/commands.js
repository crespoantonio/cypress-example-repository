///<reference types ="cypress"/>

//Log In
Cypress.Commands.add("logIn", (userName,password)=>{
    cy.get('#user-name').type(userName);
    expect(userName).not.be.empty;
    cy.get('#password').type(password, {log: false});
    expect(password).not.be.empty;
    cy.get('input.btn_action').click();
    
});

//Header
Cypress.Commands.add('goToCart', ()=>{
    cy.get('path').click();
});

Cypress.Commands.add('headerMenu', ()=>{
    cy.get('.bm-burger-button > button').click();
    cy.get('.bm-menu').should('be.visible');
});

Cypress.Commands.add('allItems', {prevSubject: 'headerMenu'}, ()=>{
    cy.get('#inventory_sidebar_link').click();
    cy.url().should('include', 'inventory')
});

Cypress.Commands.add('logOut',{ prevSubject: 'headerMenu'}, ()=>{
    cy.get('#logout_sidebar_link').click();
    cy.get('.bm-menu').should('not.be.visible');
});

Cypress.Commands.add('resetApp', {prevSubject:'headerMenu'}, ()=>{
    cy.get('#reset_sidebar_link').click();
    cy.get('.bm-cross-button > button').click();

})

Cypress.Commands.add('sortProductsBy', (option)=>{
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
    cy.get('.product_sort_container')
    .select(option)
    .then((e)=>{
        expect(e).to.have.value(option);
    });
});

//Body
Cypress.Commands.add('addProduct', (product)=>{
    cy.get(`:nth-child(${product}) > .pricebar > .btn_primary`)
    .should('have.text', 'ADD TO CART')
    .click()
    .should('have.text', 'REMOVE');
});

Cypress.Commands.add('deleteProduct', (product)=>{
    product = product + 2
    cy.get(`:nth-child(${product}) > .cart_item_label > .item_pricebar > .btn_secondary`).click();
});

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
// Cypress.Commands.add("login", (email, password) => { ... })
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
