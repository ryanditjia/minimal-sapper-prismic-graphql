import sirv from 'sirv'
// import express from 'express'
import compression from 'compression'
import * as sapper from '@sapper/server'
import polka from 'polka'

const { PORT, NODE_ENV } = process.env
const dev = NODE_ENV === 'development'

polka()
	.use(
		compression({ threshold: 0 }),
		sirv('static', { dev }),
		sapper.middleware()
	)
	.listen(PORT, (err) => {
		if (err) console.log('error', err)
	})

// const defaultLocale = 'en'
// const locales = ['ko', 'en', 'id']

/**
 * Safely extracts a locale out of the url.
 *
 * @param {string} route - An url path
 */
// function localRouteRegexp(route) {
// 	let localeString = locales.join('|')
// 	let regexp = new RegExp(`\/(${localeString})(\/|$)`, 'gm')
// 	let currLocale = route.match(regexp)
// 	if (!currLocale) {
// 		return defaultLocale
// 	}
// 	currLocale = currLocale[0].replace(/\//g, '')
// 	return currLocale || defaultLocale
// }

/**
 * Creates the express valid path regex
 * to allow matching the app on different
 * routes.
 *
 * @param {Array<String>} locales - A list of supported locales
 */
// function expressLocaleRouteRegex(locales) {
// 	let regexp = '('
// 	locales.forEach((locale, i) => {
// 		regexp += `/${locale}`
// 		if (i !== locales.length - 1) {
// 			regexp += '|'
// 		}
// 	})

// 	regexp += ')?'
// 	return regexp
// }

/**
 * A middleware to add the current
 * locale to the svelte session store.
 */
// const bindSessionToRequest = (req, res, next) =>
// 	sapper.middleware({
// 		session: () => ({ locale: req.locale }),
// 	})(req, res, next)

// const server = express()

/**
 * Finds the current locale in
 * the url path and sets it to the
 * request object.
 */
// server.use((req, _, next) => {
// 	let locale = localRouteRegexp(req.url)
// 	req.locale = locale
// 	next()
// })

// server
// 	.use(
// 		expressLocaleRouteRegex(locales),
// 		compression({ threshold: 0 }),
// 		sirv('static', { dev }),
// 		bindSessionToRequest
// 	)
// 	.listen(PORT, (err) => {
// 		if (err) console.log('error', err)
// 	})
