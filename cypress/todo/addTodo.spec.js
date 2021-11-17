/// <reference types="cypress"/>

import addTodo from "../helper/addTodo.spec";

describe("Should add todo", () => {
  it("click input box", () => {
    const text = "Hello {space} World";
    cy.visit("/");
    addTodo("Hello World");
  });
});
