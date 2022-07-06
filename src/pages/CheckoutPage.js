import React, { useEffect } from 'react'
import styled from 'styled-components'
import { PageHero } from '../components'
import { useCartContext } from '../context/cart_context'
import UseEmail from './Email'
import { CartItem } from '../components'
import { useState } from 'react'
import { getValue } from '@testing-library/user-event/dist/utils'

const Checkout = () => {
	const { total_amount, shipping_fee, cart } = useCartContext()
	let tempCart = cart.map((item) => {
		return {
			name: item.name,
			amount: item.amount,
			price: item.price,
		}
	})
	const { loading, submitted, error, sendEmail } = UseEmail(
		'https://public.herotofu.com/v1/48055970-fcd0-11ec-bc36-e1ea9ccadd33'
	)

	const getLocalStorage = () => {
		let customer = localStorage.getItem('customer')
		if (customer) {
			return JSON.parse(customer)
		} else {
			return {
				name: '',
				phone: '',
				address: '',
				email: '',
			}
		}
	}
	const initialState = getLocalStorage()

	const [userInfo, setUserInfo] = useState(initialState)

	useEffect(() => {
		localStorage.setItem('customer', JSON.stringify(userInfo))
	}, [userInfo])

	const handleChange = (e) => {
		const name = e.target.name
		const value = e.target.value
		setUserInfo((prev) => {
			return {
				...prev,
				[name]: value,
			}
		})
	}

	const sendData = () => {
		sendEmail({
			customer_details: userInfo,
			customer_order: {
				'total amounts': total_amount,
				'shipping fee': shipping_fee,
				products: tempCart,
			},
		})
	}

	return (
		<main>
			<PageHero title='checkout' />
			<Wrapper className='page'>
				<h5>Please fill out your information</h5>
				<div className='flex'>
					<label htmlFor='checkout-email'>Email: </label>
					<input
						type='email'
						id='checkout-email'
						name='email'
						value={userInfo.email}
						onChange={handleChange}
					/>

					<label htmlFor='checkout-phone'>Phone:</label>
					<input
						type='text'
						name='phone'
						id='checkout-phone'
						value={userInfo.phone}
						onChange={handleChange}
					/>

					<label htmlFor='checkout-name'>Name: </label>
					<input
						type='text'
						id='checkout-name'
						name='name'
						value={userInfo.name}
						onChange={handleChange}
					/>

					<label htmlFor='checkout-address'>Address: </label>
					<input
						type='text'
						id='checkout-address'
						name='address'
						value={userInfo.address}
						onChange={handleChange}
					/>

					<div style={{ margin: '1rem 0', fontSize: '2rem' }}>
						{submitted && 'Thanks, your order has been placed!'}
						{error ? `Unexpected error: ${error}` : null}
						{loading && 'Your order is being sent now...'}
					</div>
					<div>
						<button onClick={sendData} className='btn'>
							Order Now
						</button>
					</div>
				</div>
			</Wrapper>
		</main>
	)
}

const Wrapper = styled.section`
	h5 {
		margin-top: 1.5rem;
		text-align: center;
		text-transform: uppercase;
		color: var(--clr-gray-2);
	}
	.page {
		display: block;
	}

	.flex {
		max-width: 500px;
		margin: auto;
		display: flex;
		flex-direction: column;
		padding: 0 2rem;
	}
	input {
		padding: 0.5rem;
		background: hsl(210, 36%, 96%);
		border-radius: 2px;
		border-color: transparent;
		letter-spacing: 0.1rem;
		overflow: ;
	}
	.btn {
		margin-top: 1rem;
	}
	@media (min-width: 600px) {
		.flex {
			display: grid;
			grid-template-columns: 100px auto;
			gap: 1rem;
			padding: 0;
		}
	}
`

export default Checkout
