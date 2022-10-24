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

const reverseString2 = (str) => {
	return new Promise((resolve, reject) => {
		if (!str) {
			reject(Error('Error in promise'))
		}
		resolve(str.split('').reverse().join(''))
	})
}

test('Probar una promesa', () => {
	return reverseString2('Hola2').then((string) => {
		expect(string).toBe('2aloH')
	})
})

test('Probar async/await', async () => {
	const string = await reverseString2('Hola3')
	expect(string).toBe('3aloH')
})

/* afterEach(() => {
	console.log('despues de cada prueba')
})

afterAll(() => {
	console.log('Despues de todas las pruebas')
})

beforeEach(() => {
	console.log('antes de cada prueba')
})

beforeAll(() => {
	console.log('antes de todas las pruebas')
}) */
