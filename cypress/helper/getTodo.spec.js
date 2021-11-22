/// <reference types="cypress"/>

export const getTodoSuccessful = () => {
  cy.intercept("GET", "/todos", (req) => {
    req.reply({ fixture: "todos", statusCode: 200 });
  });
  cy.get(".todoItems").children(".todoItem").its("length").should("not.eq", 0);
};

export const getTodoFailed = () => {
  cy.intercept("GET", "/todos", (req) => {
    req.reply({ statusCode: 400 });
  });
  cy.get(".todoItems").find(".todoItem").its("length").should("eq", 0);
};
