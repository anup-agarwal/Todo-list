/// <reference types="cypress"/>

import { addTodoFailed, addTodoSuccessfully } from "../helper/addTodo.spec";
import { getTodoSuccessful } from "../helper/getTodo.spec";

describe("Todo test suite", () => {
  beforeEach(() => {
    cy.visit("/");
    getTodoSuccessful();
  });

  it("Add Todo Successfully", () => {
    addTodoSuccessfully("Hello Successful Todo");
  });

  // it("Fail to Add Todo", () => {
  //   addTodoFailed("Hello Failed Todo");
  // });
});
