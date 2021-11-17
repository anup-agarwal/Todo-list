/// <reference types="cypress"/>

const addTodo = () => {
  cy.get(".todoItems")
    .find(".todoItem")
    .first()
    .find(".todoItemDelete")
    .click();
};

export default addTodo;
