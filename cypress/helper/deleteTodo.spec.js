/// <reference types="cypress"/>

export const deleteTodoSuccessful = () => {
  cy.intercept("DELETE", /\/todo\/*/, (req) => req.reply({ statusCode: 200 }));
  cy.get(".todoItems")
    .find(".todoItem")
    .last()
    .find(".todoItemDelete")
    .click()
    .then((ele) => cy.wrap(ele.parent()).should("not.exist"));
};

export const deleteTodoFailed = () => {
  cy.intercept("DELETE", /\/todo\/*/, (req) => req.reply({ statusCode: 400 }));
  cy.get(".todoItems")
    .find(".todoItem")
    .last()
    .find(".todoItemDelete")
    .click()
    .then((ele) => cy.wrap(ele.parent()).should("not.exist"));
};
