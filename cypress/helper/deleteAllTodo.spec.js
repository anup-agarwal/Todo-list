/// <reference types="cypress"/>

const deleteAllTodo = () => {
  cy.get(".todoItems")
    .find(".todoItem")
    .find(".todoItemDelete")
    .each((ele) => cy.wrap(ele).click());
};

export default deleteAllTodo;
