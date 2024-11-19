const { defineConfig } = require('@vue/cli-service')
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin')


module.exports = defineConfig({
	filenameHashing: true,
	transpileDependencies: true,

	configureWebpack: {
		plugins: [
			new NodePolyfillPlugin(),
		],
	}
})