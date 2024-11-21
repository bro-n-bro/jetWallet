const { defineConfig } = require('@vue/cli-service')
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin')
const fs = require('fs')


module.exports = defineConfig({
	filenameHashing: true,
	transpileDependencies: true,

	configureWebpack: {
		plugins: [
			new NodePolyfillPlugin(),
		],
	},

	chainWebpack: config => {
		config.plugin('define').tap(([definitions]) => {
			const { message } = JSON.parse(fs.readFileSync('./version-badge.json', 'utf-8'))

			definitions['process.env.APP_VERSION'] = JSON.stringify(message)

			return [definitions]
		})
	}
})