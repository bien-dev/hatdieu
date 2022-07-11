import React from 'react';
import styled from 'styled-components';
import { useFilterContext } from '../context/filter_context';
import { formatPrice } from '../utils/helper';
import { getTypedValues } from '../utils/helper';

const Filters = () => {
	const {
		filters: { search, category, maxprice, price },
		all_products,
		updateFilter,
		clearFilter,
	} = useFilterContext();

	const categories = getTypedValues(all_products, 'category');
	return (
		<Wrapper>
			<div className='content'>
				<form onSubmit={(e) => e.preventDefault()}>
					{/* search input */}
					<div className='form-control'>
						<input
							type='text'
							name='search'
							value={search}
							placeholder='tìm kiếm'
							className='search-input'
							onChange={updateFilter}
						/>
					</div>
					{/* end of search input */}
					{/* category select */}
					<div className='form-control'>
						<h5>phân loại</h5>
						<div>
							{categories.map((c, index) => {
								return (
									<button
										type='button'
										key={index}
										onClick={updateFilter}
										name='category'
										className={category === c ? 'active' : null}
									>
										{c}
									</button>
								);
							})}
						</div>
					</div>
					{/* end of category select */}
					{/* price select */}
					<div className='form-control'>
						<h5>khoảng giá</h5>
						<p className='price'>{formatPrice(price)}</p>
						<input
							type='range'
							name='price'
							onChange={updateFilter}
							min='0'
							max={maxprice}
							value={price}
						/>
					</div>
					{/* end of price select */}
				</form>
				<button className='clear-btn' onClick={clearFilter}>
					xóa bộ lọc
				</button>
			</div>
		</Wrapper>
	);
};
const Wrapper = styled.section`
	.form-control {
		margin-bottom: 1.25rem;
		h5 {
			margin-bottom: 0.5rem;
		}
	}
	.search-input {
		padding: 0.5rem;
		background: var(--clr-grey-10);
		border-radius: var(--radius);
		border-color: transparent;
		letter-spacing: var(--spacing);
	}
	.search-input::placeholder {
		text-transform: capitalize;
	}
	button {
		display: block;
		margin: 0.25em 0;
		padding: 0.25rem 0;
		text-transform: capitalize;
		background: transparent;
		border: none;
		border-bottom: 1px solid transparent;
		letter-spacing: var(--spacing);
		color: var(--clr-grey-5);
		cursor: pointer;
	}
	.active {
		border-color: var(--clr-grey-5);
	}
	.company {
		background: var(--clr-grey-10);
		border-radius: var(--radius);
		border-color: transparent;
		padding: 0.25rem;
		text-transform: capitalize;
	}
	.colors {
		display: flex;
		align-items: center;
	}
	.color-btn {
		display: inline-block;
		width: 1rem;
		height: 1rem;
		border-radius: 50%;
		background: #222;
		margin-right: 0.5rem;
		border: none;
		cursor: pointer;
		opacity: 0.5;
		display: flex;
		align-items: center;
		justify-content: center;
		svg {
			font-size: 0.5rem;
			color: var(--clr-white);
		}
	}
	.all-btn {
		display: flex;
		align-items: center;
		justify-content: center;
		margin-right: 0.5rem;
		opacity: 0.5;
	}
	.active {
		opacity: 1;
	}
	.all-btn .active {
		text-decoration: underline;
	}
	.price {
		margin-bottom: 0.25rem;
	}
	.shipping {
		display: grid;
		grid-template-columns: auto 1fr;
		align-items: center;
		justify-items: left;
		text-transform: capitalize;
		column-gap: 1rem;
		font-size: 1rem;
	}
	.clear-btn {
		background: var(--clr-red-dark);
		color: var(--clr-white);
		padding: 0.25rem 0.5rem;
		border-radius: var(--radius);
	}
	@media (min-width: 768px) {
		.content {
			position: sticky;
			top: 1rem;
		}
	}
`;

export default Filters;
