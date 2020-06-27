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

    it('Should order products', function(){
        cy.headerMenu().allItems();
        cy.sortProductsBy(1);
        cy.sortProductsBy(2);
        cy.sortProductsBy(3);
        cy.sortProductsBy(4);
    });

    it('Should add 3 diferent items to the cart', function(){
        cy.addProduct(1);
        cy.addProduct(2);
        cy.addProduct(3);
        cy.goToCart();
        cy.get('.cart_item').should('have.length', 3);
    });

    it('Should remove 3 items from the cart', function(){
        cy.deleteProduct(1);
        cy.deleteProduct(2);
        cy.deleteProduct(3);
        cy.get('.cart_item').should('not.exist');
    });

    it('Should log Out', function(){
        cy.headerMenu().logOut();
        cy.url().should('include', 'index');
    });
});