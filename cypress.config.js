import { defineConfig } from 'cypress'

export default defineConfig({
    e2e: {
        baseUrl: 'https://zorvanz.vercel.app',
        specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
        supportFile: 'cypress/support/e2e.ts',
        setupNodeEvents(on, config) {
            // implement node event listeners here
        },
    },
})
