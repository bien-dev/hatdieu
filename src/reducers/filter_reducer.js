import {
	LOAD_PRODUCTS,
	SET_GRIDVIEW,
	SET_LISTVIEW,
	UPDATE_SORT,
	SORT_PRODUCTS,
	UPDATE_FILTERS,
	FILTER_PRODUCTS,
	CLEAR_FILTERS,
} from '../actions';

function filter_reducer(state, action) {
	if (action.type === LOAD_PRODUCTS) {
		let tempProducts = action.payload;
		let maxPrice = tempProducts.map((p) => p.price);
		maxPrice = Math.max(...maxPrice);
		return {
			...state,
			all_products: tempProducts,
			filtered_products: tempProducts,
			filters: {
				...state.filters,
				maxprice: maxPrice,
				price: maxPrice,
			},
		};
	}
	if (action.type === SET_GRIDVIEW) {
		return { ...state, grid_view: true };
	}

	if (action.type === SET_LISTVIEW) {
		return { ...state, grid_view: false };
	}

	if (action.type === UPDATE_SORT) {
		return { ...state, sort: action.payload };
	}

	if (action.type === SORT_PRODUCTS) {
		const { filtered_products, sort } = state;
		let tempProducts = [...filtered_products];
		if (sort === 'price-lowest') {
			tempProducts = tempProducts.sort((a, b) => {
				return a.price - b.price;
			});
		}
		if (sort === 'price-highest') {
			tempProducts = tempProducts.sort((a, b) => {
				return b.price - a.price;
			});
		}
		if (sort === 'name-a') {
			tempProducts = tempProducts.sort((a, b) => {
				return a.name.localeCompare(b.name);
			});
		}
		if (sort === 'name-z') {
			tempProducts = tempProducts.sort((a, b) => {
				return b.name.localeCompare(a.name);
			});
		}
		return { ...state, filtered_products: tempProducts };
	}
	// filter products
	if (action.type === UPDATE_FILTERS) {
		const { name, value } = action.payload;
		return {
			...state,
			filters: {
				...state.filters,
				[name]: value,
			},
		};
	}
	if (action.type === FILTER_PRODUCTS) {
		const { all_products } = state;
		const { search, category, price } = state.filters;
		let tempProducts = [...all_products];
		if (search) {
			tempProducts = tempProducts.filter((product) =>
				product.name.toLowerCase().includes(search)
			);
		}
		if (category !== 'tất cả') {
			tempProducts = tempProducts.filter(
				(product) => product.category === category
			);
		}

		// filter by price
		tempProducts = tempProducts.filter(
			(product) => product.price <= price
		);
		// filter by shipping

		return { ...state, filtered_products: tempProducts };
	}
	if (action.type === CLEAR_FILTERS) {
		return {
			...state,
			filters: {
				...state.filters,
				search: '',
				category: 'tất cả',
				price: state.filters.maxprice,
			},
		};
	}

	throw new Error(`No Matching ${action.type} action type `);
}

export default filter_reducer;
