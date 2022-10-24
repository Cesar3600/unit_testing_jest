const cities = [
	'ciudades de Mexico',
	'Bogota',
	'Lima',
	'Buenos Aires',
	'Guadalajara'
]

const randomString = () => {
	const strings = cities[Math.floor(Math.random() * cities.length)]
	return strings
}

const reverseString2 = (str) => {
	return new Promise((resolve, reject) => {
		if (!str) {
			reject(Error('Error in promise'))
		}
		resolve(str.split('').reverse().join(''))
	})
}

module.exports = randomString
