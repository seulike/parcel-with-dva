import React from 'react'
import { Menu, Icon } from 'antd'
import { Link } from 'dva/router'

const SubMenu = Menu.SubMenu
const MenuItemGroup = Menu.ItemGroup

export default class App extends React.Component {
    state = {
    	current: 'mail',
    }

	handleClick = (e) => {
		this.setState({
			current: e.key,
		})
	}

	render() {
		return (
			<Menu
				onClick={this.handleClick}
				selectedKeys={[this.state.current]}
				mode="horizontal"
			>
				<Menu.Item key="mail">
					<Link to="/products"><Icon type="mail" />产品</Link>
				</Menu.Item>
				<Menu.Item key="data">
					<Link to="/data"><Icon type="appstore" />数据</Link>
				</Menu.Item>
				<Menu.Item key="test">
					<Link to="/test"><Icon type="appstore" />测试</Link>
				</Menu.Item>
			</Menu>
		)
	}
}
