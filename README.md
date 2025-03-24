# evoluz-apps

## My Steps to Implement the Automation Test

1. **Create a new repository** for the test.
2. **Clone this repository** to VS Code and save it in my documents.
3. **Setup the project** by installing Cypress:
   ```sh
   npm install cypress --save-dev
   ```
4. **Ensure** that `node_modules` and a supported package manager are installed.
5. **Create the folder structure**:
   ```plaintext
   cypress/
   ├── fixtures/
   │   └── serviceRequestData.json
   ├── e2e/
   │   └── serviceRequest.cy.js
   ├── pages/
   │   └── serviceRequestPage.js
   ├── support/
   │   ├── commands.js
   │   └── e2e.js
   ├── downloads/
   └── cypress.config.js
   ```
6. **Fixtures Folder (`fixtures/`)**: Store test data in `serviceRequestData.json`.
7. **Pages Folder (`pages/`)**: Define the Page Object for the Service Request feature in `serviceRequestPage.js`.
8. **Support Folder (`support/`)**: Extend Cypress commands for commonly used actions such as login, defined in `commands.js`.
9. **E2E Folder (`e2e/`)**: Create the Cypress test file `serviceRequest.cy.js` for end-to-end testing.
10. **Ensure** that your `cypress.config.js` is properly set up (e.g., defining `baseUrl`).
11. **Run the test** using Cypress Test Runner:
    ```sh
    npx cypress open
    ```
12. **Run the test in headless mode**:
    ```sh
    npx cypress run
    ```
13. Push to Github
    ```sh
    git checkout -b service-request-feature
    git push -u origin service-request-feature
    ```

## Link Record
You can watch the recording of the test at the following links:
- **Run Mode Video**: [(https://drive.google.com/file/d/1Tfn7oIueieo4bKTd5yB93YlmRAqakjUn/view?usp=sharing)]
- **Open Mode Video**: [(https://drive.google.com/file/d/1oJY6lNM_ciqqG2njKhg-AExKKDvpUO99/view?usp=sharing)]

