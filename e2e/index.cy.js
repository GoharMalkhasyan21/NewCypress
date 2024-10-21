describe('example to-do app', () => {

    it('displays two todo items by default', () => {
        cy.visit("https://demoqa.com/automation-practice-form");
        cy.get("#firstName").type("Test");
        cy.get("#lastName").type("User");
        cy.get("#userEmail").type("testuser@gmail.com");
        cy.get('label.custom-control-label[for="gender-radio-1"]').click();
        cy.get("#userNumber").type(+37495060606);
        cy.get('label.custom-control-label[for="hobbies-checkbox-2"]').click();
        cy.get("#currentAddress").type("Argatsotn region");
        cy.get("#submit").click();
        cy.get("#example-modal-sizes-title-lg").should("exist");
        cy.get('#closeLargeModal').click()
        // console.log(cy.get("#closeLargeModal"))
    })
})