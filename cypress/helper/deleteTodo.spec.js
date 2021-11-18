/// <reference types="cypress"/>

const deleteTodo = () => {
  cy.get(".todoItems")
    .find(".todoItem")
    .first()
    .find(".todoItemDelete")
    .click()
    .then((ele) => cy.wrap(ele).should("not.exist"));
};

export default deleteTodo;
