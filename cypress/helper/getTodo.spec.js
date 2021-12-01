/// <reference types="cypress"/>

export const getTodo = () => {
  cy.get(".todoItems")
    .children(".todoItem")
    .its("length")
    .should("have.length.greaterThan", -1);
};
