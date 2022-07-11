import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import AmountButtons from './AmountButtons';
import { useCartContext } from '../context/cart_context';

const AddToCart = ({ product }) => {
	const { id, stock } = product;
	const { addToCart } = useCartContext();

	// const [mainColor, setMainColor] = useState(colors[0])
	const [amount, setAmount] = useState(1);

	const increase = () => {
		setAmount((prevAmount) => {
			let newAmount = prevAmount + 1;
			if (newAmount > stock) {
				newAmount = stock;
			}
			return newAmount;
		});
	};
	const decrease = () => {
		setAmount((prevAmount) => {
			let newAmount = prevAmount - 1;
			if (newAmount < 1) {
				newAmount = 1;
			}
			return newAmount;
		});
	};

	return (
		<Wrapper>
			<div className='btn-container'>
				<AmountButtons
					amount={amount}
					increase={increase}
					decrease={decrease}
				/>
				<Link
					to='/cart'
					className='btn'
					onClick={() => addToCart(id, amount, product)}
				>
					thêm vào giỏ hàng
				</Link>
			</div>
		</Wrapper>
	);
};

const Wrapper = styled.section`
	margin-top: 2rem;

	.btn-container {
		margin-top: 2rem;
	}
	.btn {
		margin-top: 1rem;
		width: 200px;
	}
`;

export default AddToCart;
