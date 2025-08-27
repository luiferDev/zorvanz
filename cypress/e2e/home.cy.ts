/// <reference types="cypress" />

describe('Página principal - Home', () => {
    beforeEach(() => {
        cy.visit('https://zorvanz.vercel.app')
    })

    it('Debería mostrar el título principal', () => {
        cy.get("[data-cy='hero-title']").contains('Personaliza tu Aroma')
		.should('have.css', 'font-family')
		.and('match', /Ageo/i)
    })
	
    it('Debería mostrar la descripción de la página', () => {
		cy.get("[data-cy='hero-text']")
		.contains(
			'Descubre tu aroma único con nuestras fragancias exclusivas. Personaliza cada detalle y dale un toque personal.',
		)
		.should('have.css', 'font-family')
		.and('match', /Vanio/i)
    })
	
    it('Debería mostrar el botón de Comprar Ahora', () => {
		cy.get('[data-cy=hero-btn]')
            .contains('Comprar Ahora')
    })

    it('Debería hacer clic en el botón de Comprar Ahora', () => {
        cy.get('[data-cy=hero-btn]').eq(0).click()
    })
})
