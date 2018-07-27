import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import { Button } from 'antd'
import dva, { connect } from 'dva'
import Product from './src/routes/products'
import RouterConfig from './src/router'
import ProductModel from './src/model/products'
const app = dva({
	initialState: {
		products: [
			{ name: 'dva', id: 1 },
			{ name: 'antd', id: 2 },
		],
	},
})
app.model(ProductModel)
// 4. Router
app.router(RouterConfig)
app.start('#root')