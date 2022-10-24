const randomStrings = require('../index')

describe('Probar funcionalidades de randomString', () => {
	test('Probar la funcionalidad', () => {
		return expect(typeof randomStrings()).toBe('string')
	})

	test('Comprobar que no existe una ciudad', () => {
		expect(randomStrings()).not.toMatch(/Limalimon/)
	})
})
