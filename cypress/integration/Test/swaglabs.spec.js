/// <reference types="cypress" />

describe('My portfolio project', ()=>{
    
    before(()=>{
        cy.fixture('login').then(function(data){
            this.data = data
        })
        cy.visit('/');
    });

    it('Should Log In', function(){
        cy.logIn(this.data.username, this.data.password);
        cy.url().should('include', 'inventory')
    })
});