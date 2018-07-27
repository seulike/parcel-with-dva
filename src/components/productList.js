import React from 'react'
import PropTypes from 'prop-types'
import { Table, Popconfirm, Button } from 'antd'

const ProductList = ({ onDelete, products }) => {
	const actionRender = (text, record) => 
		(
			<Popconfirm title="Delete?" onConfirm={() => onDelete(record.id)}>
				<Button>Delete</Button>
			</Popconfirm>
		)
	const columns = [{
		title: 'Name',
		dataIndex: 'name',
	}, {
		title: 'Actions',
		render: actionRender
	}]
	return (
		<Table
			dataSource={products}
			columns={columns}
		/>
	)
}

ProductList.propTypes = {
	onDelete: PropTypes.func.isRequired,
	products: PropTypes.array.isRequired,
}
export default ProductList