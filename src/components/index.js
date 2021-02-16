import Vue                       from 'vue'
import { upperFirst, camelCase } from 'lodash'

const components = require.context('.', true, /[\w-]+\.vue$/)

components.keys().forEach(fileName => {
	const componentConfig = components(fileName)
	const componentName   = upperFirst(
		camelCase(
			fileName
			.split('/')
			.pop()
			.replace(/\.\w+$/, '')
		)
	)
	Vue.component(componentName, componentConfig.default || componentConfig)
})

import styles from './../assets/css/style.css';