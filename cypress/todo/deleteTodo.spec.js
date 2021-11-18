/// <reference types="cypress"/>

import addTodo from "../helper/addTodo.spec";
// import deleteAllTodo from "../helper/deleteAllTodo.spec";
import deleteTodo from "../helper/deleteTodo.spec";

describe("Should delete todo", () => {
  it("adds and deletes todo", () => {
    cy.visit("/");
    addTodo(`HelloWorld`);
    deleteTodo();
  });
});
