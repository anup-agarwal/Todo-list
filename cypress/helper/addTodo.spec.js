/// <reference types="cypress"/>

const addTodo = (text) => {
  cy.get(".inputBox").click().type(text, { force: true });
  cy.get(".addButton").click();
};

export default addTodo;
