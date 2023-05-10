const express = require('express')
const app = express()

const { quotes } = require('./data')
const { getRandomElement } = require('./utils')

const PORT = process.env.PORT || 4000

app.use(express.static('public'))

app.listen(PORT, () => {
	console.log('Running')
})

app.get('/api/quotes/random', (req, res, next) => {
	const randomQuote = getRandomElement(quotes)
	res.send({ quote: randomQuote })
})

app.get('/api/quotes', (req, res, next) => {
	// const foundPerson = route.query.person
	// if (foundPerson) {
	// } else {
	// 	res.send(quotes)
	// }
	res.send({ quotes: quotes })
})
