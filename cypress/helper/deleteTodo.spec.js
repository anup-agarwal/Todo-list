/// <reference types="cypress"/>

export const deleteTodo = () => {
  cy.intercept("DELETE", /\/todo\/*/, (req) => req.reply({ statusCode: 200 }));
  cy.log(cy.get(".todoItems"));

  // .then((ele) => cy.wrap(ele.parent()).should("not.exist"));
};
