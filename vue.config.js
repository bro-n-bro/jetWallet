const { defineConfig } = require('@vue/cli-service')
const { DefinePlugin } = require('webpack')
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin')
const fs = require('fs')


module.exports = defineConfig({
	filenameHashing: true,
	transpileDependencies: true,

	configureWebpack: {
		plugins: [
			new NodePolyfillPlugin(),

			new DefinePlugin({
				'__VUE_PROD_HYDRATION_MISMATCH_DETAILS__': JSON.stringify(false),
				'__VUE_OPTIONS_API__': JSON.stringify(true),
				'__VUE_PROD_DEVTOOLS__': JSON.stringify(false)
			})
		]
	},

	chainWebpack: config => {
		config.plugin('define').tap(([definitions]) => {
			const { message } = JSON.parse(fs.readFileSync('./version-badge.json', 'utf-8'))

			definitions['process.env.APP_VERSION'] = JSON.stringify(message)

			return [definitions]
		}),

		config.module
			.rule('vue')
			.use('vue-loader')
			.tap((options) => ({
				...options,
				compilerOptions: {
					isCustomElement: (tag) => tag.startsWith('swiper-')
				}
			}))
	}
})