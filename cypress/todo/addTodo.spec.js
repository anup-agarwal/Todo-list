/// <reference types="cypress"/>

import addTodo from "../helper/addTodo.spec";

describe("Should add todo", () => {
  it("click input box", () => {
    cy.visit("/");
    addTodo("HelloWorld");
  });
});
