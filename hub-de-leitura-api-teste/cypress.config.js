const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: true,

  env: {
    hideCredentials: true
  
  },

  e2e: {
    setupNodeEvents(on, config) {
      // eventos aqui se precisar
    },
    baseUrl:'http://localhost:3000/api'
  },
});


