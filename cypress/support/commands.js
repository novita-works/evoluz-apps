import 'cypress-file-upload';


Cypress.Commands.add('loginAsAdmin', () => {
    cy.visit('/account/login');
    cy.get('input[name="nameOrEmail"]').type('januari')
    cy.get('input[name="password"]').type('januari')
    cy.get('button[type="submit"]').click()
  });

  Cypress.Commands.add('addValidRequest', (serviceRequestData) => {
    cy.get('input[name="billing_requestService"]').type(serviceRequestData.title)
    cy.get('input[type="file"]').attachFile(serviceRequestData.image)
    cy.get('p[data-placeholder="Tuliskan deskripsi request disini"]')
        .click()
        .type('Ini adalah deskripsi request otomatisasi menggunakan Cypress.')
    cy.get('button[type="submit"]').click()
  });
  