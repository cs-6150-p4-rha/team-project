module.exports = {
	globDirectory: '_includes/',
	globPatterns: [
		'**/*.html'
	],
	swDest: '_includes/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};