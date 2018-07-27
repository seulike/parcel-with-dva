import React from 'react'
import { Route, Switch,BrowserRouter } from 'dva/router'
import Products from './routes/products'
import Test from './routes/test'
import Data from './routes/data'
import MenuNav from './routes/menuNav'
import 'antd/dist/antd.css'
import './style/main'

function RouterConfig() {
	return (
		<BrowserRouter>
			<div className="wrapper">
				<MenuNav/>
				<Switch>
					<Route path="/products" exact component={Products} />
					<Route path="/test" exact component={Test} />
					<Route path="/data" exact component={Data} />
					<Route path="/" exact component={Products} />
				</Switch>
			</div>
		</BrowserRouter>
	)
}

export default RouterConfig
