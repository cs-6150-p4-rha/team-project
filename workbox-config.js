module.exports = {
	globDirectory: '_site/',
	globPatterns: [
		'**/*.html'
	],
	swDest: '_site/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};