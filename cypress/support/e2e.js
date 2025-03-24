import './commands'
Cypress.on('uncaught:exception', (err, runnable) => {
  // Ignore ResizeObserver loop error
  if (err.message.includes('ResizeObserver loop completed with undelivered notifications')) {
    return false
  }
  // Allow other exceptions to fail the test
  return true
});
