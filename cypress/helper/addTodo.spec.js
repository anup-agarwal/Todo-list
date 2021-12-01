/// <reference types="cypress"/>

export const addTodo = (text) => {
  cy.get(".inputBox").type(text);
  cy.get(".addButton")
    .click()
    .then(() =>
      cy.get(".todoItems").find(".todoItem").last().should("contain.text", text)
    );
};
