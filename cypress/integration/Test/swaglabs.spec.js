/// <reference types="cypress" />

describe('My portfolio project', ()=>{
    
    before(()=>{
        cy.fixture('login').as('data');
        cy.visit('/');
    });

    it('Should Log In', function(){
        cy.logIn(this.data.username, this.data.password);
        cy.url().should('include', 'inventory');
    });

    it('Should go to cart an be empty', function(){
        cy.goToCart();
        cy.get('.cart_item').should('not.exist');
    });

    it('Should order A to Z', function(){
        cy.headerMenu().allItems();
        cy.sortProductsBy(1);
        cy.get('.inventory_list > :nth-child(1) .inventory_item_name')
        .should('have.text', 'Sauce Labs Backpack')
    });

    it('Should order Z to A', function(){
        cy.sortProductsBy(2);
        cy.get('.inventory_list > :nth-child(1) .inventory_item_name')
        .should('have.text', 'Test.allTheThings() T-Shirt (Red)')
    });

    it('Should order Low to High Price', function(){
        cy.sortProductsBy(3);
        cy.get('.inventory_list > :nth-child(1) .inventory_item_name')
        .should('have.text', 'Sauce Labs Onesie')
    });

    it('Should order High to Low Price', function(){
        cy.sortProductsBy(4);
        cy.get('.inventory_list > :nth-child(1) .inventory_item_name')
        .should('have.text', 'Sauce Labs Fleece Jacket')
    });

    it('Should add 3 diferent items to the cart', function(){
        cy.addProduct(1);
        cy.addProduct(2);
        cy.addProduct(3);
        cy.goToCart();
        cy.get('.cart_item').should('have.length', 3);
    });

    it('Should remove 1 items from the cart', function(){
        cy.deleteProduct(1);
        cy.get('.cart_item').should('have.length', 2);
    });

    it('Should reset  the page', function(){
        cy.headerMenu().resetApp();
        cy.goToCart()
        cy.get('.cart_item').should('not.exist');
    });

    it('Should log Out', function(){
        cy.headerMenu().logOut();
        cy.url().should('include', 'index');
    });
});
