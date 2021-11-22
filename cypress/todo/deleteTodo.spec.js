/// <reference types="cypress"/>

import { addTodoSuccessfully } from "../helper/addTodo.spec";
import {
  deleteTodoFailed,
  deleteTodoSuccessful,
} from "../helper/deleteTodo.spec";
import { getTodoSuccessful } from "../helper/getTodo.spec";

describe("Should delete todo", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("delete todo successfully", () => {
    getTodoSuccessful();
    addTodoSuccessfully(`Hello World`);
    deleteTodoSuccessful();
  });

  // it("delete todo unsuccessfully", () => {
  //   cy.visit("/");
  //   addTodoSuccessfully(`Hello World`);
  //   deleteTodoFailed();
  // });
});
