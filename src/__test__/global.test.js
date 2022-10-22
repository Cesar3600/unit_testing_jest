const text = 'Hola mundo'

test('Debe contener un texto', () => {
	expect(text).toMatch(/mundo/)
})

const fruits = ['manzanas', 'melon', 'banana']

test('Tenemos una banana?', () => {
	expect(fruits).toContain('banana')
})

test('mayor que', () => {
	expect(10).toBeGreaterThan(9)
})

test('Verdadero', () => {
	expect(true).toBeTruthy()
})

const reverseString = (str, callback) => {
	callback(str.split('').reverse().join(''))
}

test('Probar un Callback', () => {
	reverseString('Hola', (str) => {
		expect(str).toBe('aloH')
	})
})
