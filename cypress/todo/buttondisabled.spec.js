/// <reference types="cypress"/>

import { should } from "chai";
import addTodo from "../helper/addTodo.spec";

describe("button should be disabled when there are no charaters in input box", () => {
  it("delete characters from input", () => {
    cy.visit("/");
    addTodo(" ");
    // addTodo(`Hello World`);
    // addTodo(`Hello World2`);
    // addTodo(`Hello World3`);
    // addTodo(`Hello World4`);
    // deleteTodo();
    // deleteTodo();
    // deleteTodo();
    // deleteTodo();
  });
});
