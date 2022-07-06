import React from 'react'
import styled from 'styled-components'
import { useCartContext } from '../context/cart_context'
import { Link } from 'react-router-dom'
import { CartContent, PageHero } from '../components'

const CartPage = () => {
	const { cart } = useCartContext()
	if (cart.length < 1) {
		return (
			<Wrapper className='page-100'>
				<div className='empty'>
					<div>
						<h2>Nothing in your Cart</h2>
						<Link to='/products' className='btn'>
							back to shopping
						</Link>
					</div>
				</div>
			</Wrapper>
		)
	}
	return (
		<main>
			<PageHero title='cart' />
			<Wrapper className='page'>
				<CartContent />
			</Wrapper>
		</main>
	)
}

const Wrapper = styled.main`
	.empty {
		margin-top: 10%;
		text-align: center;
		h2 {
			margin-bottom: 2rem;
			text-transform: none;
		}
	}
`
export default CartPage
