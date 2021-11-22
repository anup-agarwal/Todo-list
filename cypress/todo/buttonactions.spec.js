/// <reference types="cypress"/>

describe("button should be enabled or disabled based on the number of charaters after triming input box content", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("delete characters from input", () => {
    cy.get(".inputBox").type("a");
    cy.get(".addButton").should("be.enabled");
    cy.get(".inputBox").clear();
  });

  it("delete characters from input", () => {
    cy.get(".inputBox").type("       ");
    cy.get(".addButton").should("be.disabled");
    cy.get(".inputBox").clear();
  });
});
