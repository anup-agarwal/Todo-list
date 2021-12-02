/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars

const fs = require("fs");
const path = require("path");

module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
  const configsJSON = JSON.parse(
    fs
      .readFileSync(
        path.join(__dirname, "..", "configFiles", config.env.filename)
      )
      .toString()
  );
  const { REACT_APP_API, REACT_APP_FRONTEND } = configsJSON[config.env.stage];
  return {
    integrationFolder: "cypress/todo",
    baseUrl: REACT_APP_FRONTEND,
    env: {
      BACKEND_API: REACT_APP_API,
    },
  };
};
