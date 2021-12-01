/// <reference types="cypress"/>

import { addTodo } from "../helper/addTodo.spec";
import { deleteTodo } from "../helper/deleteTodo.spec";

describe("Todo test suite", () => {
  before(() => {
    cy.intercept("POST", "/createtodo").as("createTodoAPI");
    cy.intercept("GET", "/todos").as("getTodosAPI");
  });

  beforeEach(() => {
    cy.visit("/");
  });

  it("adds todo", () => {
    addTodo("Hello Successful Todo");
  });

  it("deletes todo", () => {
    addTodo(`Hello World`);
    // deleteTodo();
  });

  // afterEach(() => {
  //   deleteTodo();
  // });

  // it("Get Todo Successfully", () => {
  //   getTodo();
  // });

  after(() =>
    cy
      .request({
        method: "DELETE",
        url: Cypress.env("BACKEND_API") + "/todos",
      })
      .then((res) => {
        expect(res.status).to.be.eql(200);
        cy.wrap(res.body.items).should("have.length", 0);
      })
  );
});

describe("button should be enabled or disabled based on the number of charaters after triming input box content", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("enables button for non empty input box after trimming", () => {
    cy.get(".inputBox").type("a");
    cy.get(".addButton").should("be.enabled");
    cy.get(".inputBox").clear();
  });

  it("disables button for empty input box after trimming", () => {
    cy.get(".inputBox").type("       ");
    cy.get(".addButton").should("be.disabled");
    cy.get(".inputBox").clear();
  });
});
