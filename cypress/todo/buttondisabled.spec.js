/// <reference types="cypress"/>

import addTodo from "../helper/addTodo.spec";

describe("button should be disabled when there are no charaters in input box", () => {
  it("delete characters from input", () => {
    cy.visit("/");
    cy.get(".inputBox").click().type("       ", { force: true });
    cy.get(".addButton").should("be.disabled");
  });
});
