class ServiceRequestPage {
    navigateToServiceRequest() {
      cy.get('span').contains('Permintaan Pelayanan').click()
    }
  
    searchForRequest(searchKeyword) {
      cy.get('input[placeholder="Search..."]').type(searchKeyword)
    }
  
    verifySearchResult(searchKeyword) {
      cy.get('tbody').contains(searchKeyword).should('exist')
    }

    searchForInvalidRequest(invalidSearchKeyword) {
        cy.get('input[placeholder="Search..."]').type(invalidSearchKeyword)
      }

    verifyInvalidSearchResult() {
        cy.get('tbody').contains('Data Tidak Ada').should('exist')
      }
  
    clickAddServiceRequest() {
      cy.get('button.mb-2.btn.btn-danger').click()
    }
  
    fillServiceRequestForm(title, details) {
      cy.get('input[name="billing_requestService"]').type(title)
      cy.get('p.ck-placeholder').type(details)
    }
  
    submitForm() {
      cy.get('button.btn.btn-danger').contains(' Kirim').click()
    }
  
    verifySuccessAddRequest() {
    //   cy.get('.success-message').should('contain', 'Data request feature berhasil ditambahkan')
      cy.url().should('include', '/apps/request-service/detail', { timeout: 20000 })
        .and('match', /requestId=[a-z0-9-]+/)
    }

    verifyFailedAddRequest() {
        cy.get('div.invalid-feedback').should('contain', 'Judul usulan harus diisi');
    }

    clickDetailServiceRequest() {
        cy.get('a[data-action="click-button"]'),contains('Detail').click()
      }

    clickEditButton() {
      cy.get('button.btn.btn-primary').contains(' Edit').click()
    }

    clearTitleField() {
      cy.get('input[name="billing_requestFeature"]').clear()
    }

    fillServiceRequestUpdate(title) {
      cy.get('input[name="billing_requestFeature"]').clear().type(title)
    }

    clickSaveUpdateButton() {
      cy.get('button.btn.btn-outline-primary').contains(' Simpan').should('be.visible').click()
    }
}
      
  
  export default ServiceRequestPage
  