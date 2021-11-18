/// <reference types="cypress"/>

const addTodo = (text) => {
  cy.get(".inputBox").click().type(text, { force: true });
  cy.get(".addButton").click();
  cy.get(".todoItems").find(".todoItem").last().should("contain.html", text);
};

export default addTodo;
