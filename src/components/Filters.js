import React from 'react'
import styled from 'styled-components'
import { useFilterContext } from '../context/filter_context'
import { formatPrice } from '../utils/helper'
import { FaCheck } from 'react-icons/fa'
import { getTypedValues } from '../utils/helper'

const Filters = () => {
	const {
		filters: { search, category, company, colors, max_price, price, freeShip },
		all_products,
		updateFilter,
		clearFilter,
	} = useFilterContext()

	const categories = getTypedValues(all_products, 'category')
	const companies = getTypedValues(all_products, 'company')
	const color = getTypedValues(all_products, 'colors')
	console.log(color)

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
							placeholder='search'
							className='search-input'
							onChange={updateFilter}
						/>
					</div>
					{/* end of search input */}
					{/* category select */}
					<div className='form-control'>
						<h5>category</h5>
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
								)
							})}
						</div>
					</div>
					{/* end of category select */}
					{/* company select */}
					<div className='form-control'>
						<h5>company</h5>
						<select
							name='company'
							value={company}
							onChange={updateFilter}
							className='company'
						>
							{companies.map((c, index) => {
								return (
									<option key={index} value={c}>
										{c}
									</option>
								)
							})}
						</select>
					</div>
					{/* end of company select */}
					{/* color select */}
					<div className='form-control'>
						<h5>colors</h5>
						<div className='colors'>
							{color.map((c, index) => {
								if (c === 'all') {
									return (
										<button
											key={index}
											name='colors'
											onClick={updateFilter}
											data-color='all'
											className={c === colors ? 'all-btn active' : 'all-btn'}
										>
											all
										</button>
									)
								}
								return (
									<button
										key={index}
										name='colors'
										style={{ background: c }}
										onClick={updateFilter}
										className={colors === c ? 'color-btn active' : 'color-btn'}
										data-color={c}
									>
										{colors === c && <FaCheck />}
									</button>
								)
							})}
						</div>
					</div>
					{/* end of color select */}
					{/* price select */}
					<div className='form-control'>
						<h5>price</h5>
						<p className='price'>{formatPrice(price)}</p>
						<input
							type='range'
							name='price'
							onChange={updateFilter}
							min='0'
							max={max_price}
							value={price}
						/>
					</div>
					{/* end of price select */}
					{/* free ship */}
					<div className='form-control shipping'>
						<label htmlFor='shipping'>free shipping</label>
						<input
							type='checkbox'
							name='freeShip'
							id='shipping'
							onClick={updateFilter}
							checked={freeShip}
						/>
					</div>
					{/* end of  free ship */}
				</form>
				<button className='clear-btn' onClick={clearFilter}>
					clear filters
				</button>
			</div>
		</Wrapper>
	)
}
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
`

export default Filters