/// <reference types="cypress"/>

import { getTodoFailed, getTodoSuccessful } from "../helper/getTodo.spec";

describe("Todo test suite", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Get Todo Successfully", () => {
    getTodoSuccessful();
  });

  // it("Fail to Get Todo", () => {
  //   getTodoFailed();
  // });
});
