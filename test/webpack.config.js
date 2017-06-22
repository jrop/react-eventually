const builder = require('webpack-configify').default
const PROD = process.env.NODE_ENV == 'production'
module.exports = builder()
	.development(!PROD)
	.production(PROD)
	.src('src/index.tsx')
	.dest('lib')
	.loader(['.ts', '.tsx'], 'awesome-typescript-loader')
	.merge({
		output: {publicPath: '/lib/'},
		resolve: {extensions: ['.js', '.json', '.ts', '.tsx']},
	})
	.build()

if (require.main === module) {
	const {inspect} = require('util')
	console.log(inspect(module.exports, null, null))
}
