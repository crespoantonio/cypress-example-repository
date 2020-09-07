/// <reference types="cypress" />
const LOCATORS = require('../../fixtures/locators.json')

describe('My portfolio project on saucedemo.com/', ()=>{
    
    before(()=>{
        cy.visit('/');
    });

    beforeEach(()=>{
        cy.fixture('loginData').as('data');
    });

    it('SD001 - Should Log In', function(){
        cy.get('@data').then((data)=>{
            cy.logIn(data);
            cy.url().should('include', 'inventory', 'The URL is not the expected');
        });
    });

    it('SD000 - Should go to cart an be empty', function(){
        cy.visit('/cart.html');
        cy.get(LOCATORS.cartItems).should('not.exist');
    });

    it('SD002 - Should order A to Z', function(){
        cy.headerMenu().allItems();
        cy.sortProductsBy(1, 'Sauce Labs Backpack');
    });

    it('SD000 - Should order Z to A', function(){
        cy.sortProductsBy(2, 'Test.allTheThings() T-Shirt (Red)');
    });

    it('SD000 - Should order Low to High Price', function(){
        cy.sortProductsBy(3, 'Sauce Labs Onesie');
    });

    it('SD000 - Should order High to Low Price', function(){
        cy.sortProductsBy(4, 'Sauce Labs Fleece Jacket');
    });

    it('SD000 - Should add 3 diferent items to the cart', function(){
        for(let i=1; i<=3; i++){
            cy.addProduct(i);    
        }
        cy.visit('/cart.html');
        cy.get(LOCATORS.cartItems).should('have.length', 3);
    });

    it('SD000 - Should remove 1 items from the cart', function(){
        cy.deleteProduct(1);
        cy.get(LOCATORS.cartItems).should('have.length', 2);
    });

    it('SD000 - Should reset  the page', function(){
        cy.headerMenu().resetApp();
        cy.visit('/cart.html')
        cy.get(LOCATORS.cartItems).should('not.exist');
    });

    it('SD000 - Should log Out', function(){
        cy.headerMenu().logOut();
        cy.url().should('include', 'index');
    });
});
