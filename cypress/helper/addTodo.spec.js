/// <reference types="cypress"/>

export const addTodoSuccessfully = (text) => {
  cy.intercept("POST", "/createtodo", (req) => {
    req.reply({ ...req.body });
  });
  cy.get(".inputBox").type(text);
  cy.get(".addButton")
    .click()
    .then(() =>
      cy.get(".todoItems").find(".todoItem").last().should("contain.text", text)
    );
};

export const addTodoFailed = (text) => {
  cy.intercept("POST", "/createtodo", (req) => {
    req.reply({ statusCode: 400 });
  });
  cy.get(".inputBox").type(text);
  cy.get(".addButton")
    .click()
    .then(() => {
      cy.get(".todoItems").children().contains(".todoItem").then(cy.log);
    });
};
