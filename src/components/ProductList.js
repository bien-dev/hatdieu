import React from 'react'
import ListView from './ListView'
import GridView from './GridView'
import { useFilterContext } from '../context/filter_context'

const ProductList = () => {
	const { filtered_products: filProducts, grid_view } =
		useFilterContext()

	if (filProducts.length < 1) {
		return (
			<h5 style={{ texTransform: 'none' }}>
				Sorry, no products matched your search...
			</h5>
		)
	}
	if (grid_view === false) {
		return <ListView products={filProducts} />
	}

	return <GridView products={filProducts} />
}

export default ProductList
