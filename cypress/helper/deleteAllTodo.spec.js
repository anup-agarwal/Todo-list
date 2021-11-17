/// <reference types="cypress"/>

const deleteAllTodo = () => {
  cy.get(".todoItems")
    .find(".todoItem")
    .find(".todoItemDelete")
    .click({ multiple: true });
};

export default deleteAllTodo;
