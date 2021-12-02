/// <reference types="cypress"/>

export const deleteTodo = () => {
  cy.get(".todoItemDelete").click({ multiple: true }).should("not.exist");
};
