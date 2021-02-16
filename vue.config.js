module.exports = {
	chainWebpack : config => {
		if(process.env.NODE_ENV === 'development') config.output.filename('[hash].js').end()
	},

	devServer : {
		public           : 'localhost:8787',
		disableHostCheck : true
	},

	productionSourceMap : false,

	css : {
		requireModuleExtension : true,
		loaderOptions          : {
			css : {
				modules : {
					localIdentName : process.env.NODE_ENV === 'production'
						? '[hash:base64:16]'
						: '[local]-[hash:base64:2]'
				}
			}
		}

	}

};