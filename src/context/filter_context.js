import React, { useContext, useEffect, useReducer } from 'react'
import data from '../assets/all-products.json'
import {
	LOAD_PRODUCTS,
	SET_GRIDVIEW,
	SET_LISTVIEW,
	UPDATE_SORT,
	SORT_PRODUCTS,
	UPDATE_FILTERS,
	FILTER_PRODUCTS,
	CLEAR_FILTERS,
} from '../actions'
import reducer from '../reducers/filter_reducer'

const initialState = {
	filtered_products: [],
	all_products: [],
	grid_view: false,
	sort: 'price_lowest',
	filters: {
		search: '',
		price: 0,
		maxprice: 0,
		category: 'tất cả',
	},
}

const FilterContext = React.createContext()

export const FilterProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState)
	const all_products = data

	useEffect(() => {
		dispatch({ type: LOAD_PRODUCTS, payload: all_products })
	}, [all_products])

	useEffect(() => {
		dispatch({ type: FILTER_PRODUCTS })
		dispatch({ type: SORT_PRODUCTS })
	}, [all_products, state.sort, state.filters])

	const setGridView = () => {
		dispatch({ type: SET_GRIDVIEW })
	}

	const setListView = () => {
		dispatch({ type: SET_LISTVIEW })
	}

	const updateSort = (e) => {
		// const name = e.target.name {for showcase}
		const value = e.target.value
		dispatch({ type: UPDATE_SORT, payload: value })
	}

	const updateFilter = (e) => {
		let name = e.target.name
		let value = e.target.value
		if (name === 'category') {
			value = e.target.textContent
		}
		if (name === 'price') {
			value = Number(value)
		}

		dispatch({ type: UPDATE_FILTERS, payload: { name, value } })
	}
	const clearFilter = () => {
		dispatch({ type: CLEAR_FILTERS })
	}

	return (
		<FilterContext.Provider
			value={{
				...state,
				setGridView,
				setListView,
				updateSort,
				updateFilter,
				clearFilter,
			}}
		>
			{children}
		</FilterContext.Provider>
	)
}

export const useFilterContext = () => {
	return useContext(FilterContext)
}
