/// <reference types ="cypress" />
/// <reference types="cypress-xpath" />

describe("demo launch", ()=>{
    it('login', ()=>{
        // navigate to wesite and verify it's title
        cy.visit("https://www.saucedemo.com/");
        cy.title().should('eq','Swag Labs')

        // logging in
        cy.get("#user-name").type("standard_user")
        cy.get("#password").type("secret_sauce")
        cy.get("#login-button").click()

        // find product and add into cart 
        cy.xpath("//div[text()='Sauce Labs Bolt T-Shirt']").click()

        // Adding product into cart 
        cy.get("#add-to-cart-sauce-labs-bolt-t-shirt").click()
        cy.get("#shopping_cart_container").click()

        // under cart 
        cy.get("#checkout").click()

        // deleviry details 
        cy.get("#first-name").type("hello")
        cy.get("#last-name").type("world")
        cy.get("#postal-code").type("7373287")
        cy.get("#continue").click()

        // Back to homepage 
        cy.get("#finish").click()
        cy.get("#back-to-products").click()

        // logging out
        cy.get("#react-burger-menu-btn").click()
        cy.get("#logout_sidebar_link").click()
    })

    it("with different user", ()=>{
        // navigate to wesite and verify it's title
        cy.visit("https://www.saucedemo.com/");
        cy.title().should('eq','Swag Labs')

        // logging in
        cy.get("#user-name").type("performance_glitch_user")
        cy.get("#password").type("secret_sauce")
        cy.get("#login-button").click()

        // find product and add into cart 
        cy.xpath("//div[text()='Sauce Labs Bolt T-Shirt']").click()

        // Adding product into cart 
        cy.get("#add-to-cart-sauce-labs-bolt-t-shirt").click()
        cy.get("#shopping_cart_container").click()

        // under cart 
        cy.get("#checkout").click()

        // deleviry details 
        cy.get("#first-name").type("hello")
        cy.get("#last-name").type("world")
        cy.get("#postal-code").type("7373287")
        cy.get("#continue").click()

        // Back to homepage 
        cy.get("#finish").click()
        cy.get("#back-to-products").click()

        // logging out
        cy.get("#react-burger-menu-btn").click()
        cy.get("#logout_sidebar_link").click()
    })


    it("with user: 3", ()=>{
        // navigate to wesite and verify it's title
        cy.visit("https://www.saucedemo.com/");
        cy.title().should('eq','Swag Labs')

        // logging in
        cy.get("#user-name").type("problem_user")
        cy.get("#password").type("secret_sauce")
        cy.get("#login-button").click()

        // find product and add into cart 
        cy.xpath("//div[text()='Sauce Labs Bolt T-Shirt']").click()

        // Adding product into cart 
        cy.get("#add-to-cart-sauce-labs-onesie").click()
        cy.get("#shopping_cart_container").click()

        // under cart 
        cy.get("#checkout").click()

        // deleviry details 
        cy.get("#first-name").type("hello")
        cy.get("#last-name").type("worlddd")
        cy.get("#postal-code").type("7373287")
        cy.get("#continue").click()

        // Back to homepage 
        cy.get("#finish").click()
        cy.get("#back-to-products").click()

        // logging out
        cy.get("#react-burger-menu-btn").click()
        cy.get("#logout_sidebar_link").click()
    })
})