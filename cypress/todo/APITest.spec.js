/// <reference types="cypress"/>

describe("API test suite", () => {
  let id;
  it("Should get all todos", () => {
    cy.request({
      method: "GET",
      url: Cypress.env("BACKEND_API") + "/todos",
    }).then((res) => {
      expect(res.status).to.be.eql(200);
      cy.wrap(res.body).its("length").should("be.greaterThan", -1);
    });
  });

  it("Should add todo", () => {
    cy.request({
      method: "POST",
      url: Cypress.env("BACKEND_API") + "/createtodo",
      body: {
        item: "Task 1",
      },
    }).then((res) => {
      expect(res.status).to.be.eql(201);
      cy.wrap(res.body).should("have.a.property", "item");
      cy.wrap(res.body).should("have.a.property", "id");
      id = res.body.id;
    });
  });

  it("Should delete todo", () => {
    cy.request({
      method: "DELETE",
      url: Cypress.env("BACKEND_API") + `/todo/${id}`,
    }).then((res) => expect(res.status).to.be.eql(200));
  });

  it("Should delete all todos", () => {
    cy.request({
      method: "DELETE",
      url: Cypress.env("BACKEND_API") + "/todos",
    }).then((res) => {
      expect(res.status).to.be.eql(200);
      cy.wrap(res.body.items).should("have.length", 0);
    });
  });
});
