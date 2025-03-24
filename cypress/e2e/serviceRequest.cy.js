import ServiceRequestPage from '../pages/serviceRequestPage'
import '../support/commands'

const serviceRequestPage = new ServiceRequestPage()

describe('Service Request Feature', () => {
  
  beforeEach(function () {
    cy.loginAsAdmin()  // Login before each test
    cy.fixture('serviceRequestData').as('requestData')  // Load fixture data before each test
    serviceRequestPage.navigateToServiceRequest() // Navigate to service request page after login
  })

  function generateRandomTitle() {
    const actions = ['Deployment', 'Optimization', 'Audit', 'Configuration', 'Backup', 'Initiated', 'Under Review', 'Approved', 'Deferred', 'Closed']
    const randomAction = actions[Math.floor(Math.random() * actions.length)]
    return `Permintaan Pelayanan Testing ${randomAction}`;
  }

  // ================== SCENARIO 1: Verify View Service Request Functionality ==================
  describe('Verify view service request list functionality', () => {
    it('View the list of service requests with valid keywords in the search text box.', function () {
        const { searchKeyword } = this.requestData
        serviceRequestPage.searchForRequest(searchKeyword)
        serviceRequestPage.verifySearchResult(searchKeyword)
    })

    it('View the list of service requests with invalid keywords in the search text box.', function () {
        const { invalidSearchKeyword } = this.requestData
        serviceRequestPage.searchForInvalidRequest(invalidSearchKeyword)
        serviceRequestPage.verifyInvalidSearchResult(invalidSearchKeyword)
    })  
  })
  
  // ================== SCENARIO 2: Verify Add Service Request Functionality ==================
  describe('Verify add service request functionality', () => {
    it('Add a new service request with valid data.', function () {
        const { validRequest } = this.requestData
        const randomTitle = generateRandomTitle() // Generate random title
        validRequest.title = randomTitle
    
        serviceRequestPage.clickAddServiceRequest()
        serviceRequestPage.fillServiceRequestForm(randomTitle, validRequest.details)
        serviceRequestPage.submitForm()
        serviceRequestPage.verifySuccessAddRequest(randomTitle)
    })

    it('Add a new service request without filling the requested field.', function () {
        serviceRequestPage.clickAddServiceRequest()
        serviceRequestPage.submitForm()
        serviceRequestPage.verifyFailedAddRequest()
    })
  })

  // ================== SCENARIO 3: Verify Update Service Request Functionality ==================
  describe('Verify update service request functionality', () => {
    it('Update service request with valid data.', function () {
        const randomTitle = generateRandomTitle()
        const requestId = 'fba64334-083d-11f0-a43d-eb03332faece'
        cy.get(`a[href*="${requestId}"]`).click()
        cy.url().should('include', `requestId=${requestId}`)
        serviceRequestPage.clickEditButton()
        serviceRequestPage.clearTitleField()
        serviceRequestPage.fillServiceRequestUpdate(randomTitle)
        serviceRequestPage.clickSaveUpdateButton()
        cy.get('tbody').contains(randomTitle).should('exist')
    })

    it('Update service request with invalid data.', function () {
        const existingTitle = 'heee'
        cy.contains('tr', 'Service Request March - 1').within(() => {
            cy.get('a.action-icon').click()
            cy.url({ timeout: 20000 }).should('eq', 'https://evoluz.farmagitechs.co.id/apps/request-service/detail?requestId=c8a98fdf-088a-11f0-a43d-8bc70aa7305a')
        })
        serviceRequestPage.clickEditButton()
        serviceRequestPage.clearTitleField()
        serviceRequestPage.fillServiceRequestUpdate(existingTitle)
        serviceRequestPage.clickSaveUpdateButton()
        cy.get('div[role="alert"]').should('have.class', 'alert-danger')
        .and('contain.text', `Data Request Title = ${existingTitle} telah ada.`)
        })
    })
  })