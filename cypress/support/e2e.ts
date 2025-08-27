// ***********************************************************
// This example support/e2e.ts is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

Cypress.on('uncaught:exception', (err) => {
  if (
    /hydration failed/i.test(err.message) ||
    /hydrateRoot/i.test(err.message) ||
    /Hydration failed because the server rendered HTML didn't match/i.test(err.message)
  ) {
    return false
  }
})

