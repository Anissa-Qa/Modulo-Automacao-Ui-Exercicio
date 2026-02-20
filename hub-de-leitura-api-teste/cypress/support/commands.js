// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

const { expect } = require("chai")


Cypress.Commands.add('geratoken', (email, senha) => {
    return cy.request({
        method: 'POST',
        url: 'http://localhost:3000/api/login',
        body: { email, password: senha }
    }).then((response) => {
        expect(response.status).to.equal(200)
        Cypress.env('token', response.body.token)
        return response.body.token // 
    })
})




Cypress.Commands.add('cadastrarUsuario', (nome, email, senha) => {
    cy.api({  
        method: 'POST',
        url: 'users',
        headers: { Authorization: token },
        body: { nome: nome, email: email, senha: senha }
    }).then((response) => {
        expect(response.status).to.equal(201)
        return response.body.id  // agora o .then() no teste recebe o ID corretamente
    })
})
