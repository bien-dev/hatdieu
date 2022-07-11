import React, { useEffect } from 'react';
import styled from 'styled-components';
import { PageHero } from '../components';
import { useCartContext } from '../context/cart_context';
import UseEmail from './Email';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Checkout = () => {
	const { total_amount, shipping_fee, cart, clearCart } =
		useCartContext();

	let tempCart = cart.map((item) => {
		return {
			name: item.name,
			amount: item.amount,
			price: item.price,
		};
	});
	const { loading, submitted, error, sendEmail } = UseEmail(
		'https://public.herotofu.com/v1/48055970-fcd0-11ec-bc36-e1ea9ccadd33'
	);

	const FORM_ENDPOINT =
		'https://public.herotofu.com/v1/48055970-fcd0-11ec-bc36-e1ea9ccadd33';

	const getLocalStorage = () => {
		let customer = localStorage.getItem('customer');
		if (customer) {
			return JSON.parse(customer);
		} else {
			return {
				name: '',
				phone: '',
				address: '',
				email: '',
			};
		}
	};
	const initialState = getLocalStorage();

	const [userInfo, setUserInfo] = useState(initialState);

	useEffect(() => {
		localStorage.setItem('customer', JSON.stringify(userInfo));
	}, [userInfo]);

	const handleChange = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		setUserInfo((prev) => {
			return {
				...prev,
				[name]: value,
			};
		});
	};

	const sendData = () => {
		sendEmail({
			customer_details: userInfo,
			customer_order: {
				'total amounts': total_amount,
				'shipping fee': shipping_fee,
				products: tempCart,
			},
		});
	};
	if (cart.length < 1) {
		return (
			<Wrapper className='page-100'>
				<div className='empty'>
					<div>
						<h2>Bạn chưa chọn sản phẩm nào cả...</h2>
						<Link to='/products' className='btn'>
							trở lại mua hàng
						</Link>
					</div>
				</div>
			</Wrapper>
		);
	}

	return (
		<main>
			<PageHero title='thanh toán' />
			<Wrapper className='page'>
				<h5>Hãy điền thông tin của bạn</h5>
				<form
					action={FORM_ENDPOINT}
					onSubmit={sendData}
					method='POST'
					target='_blank'
				>
					<div className='grid'>
						<label htmlFor='checkout-email'>Email: </label>
						<input
							type='email'
							id='checkout-email'
							name='email'
							value={userInfo.email}
							onChange={handleChange}
							required
						/>

						<label htmlFor='checkout-phone'>Số điện thoại:</label>
						<input
							type='text'
							name='phone'
							id='checkout-phone'
							value={userInfo.phone}
							onChange={handleChange}
							required
						/>

						<label htmlFor='checkout-name'>Tên: </label>
						<input
							type='text'
							id='checkout-name'
							name='name'
							value={userInfo.name}
							onChange={handleChange}
							required
						/>

						<label htmlFor='checkout-address'>Địa chỉ: </label>
						<input
							type='text'
							id='checkout-address'
							name='address'
							value={userInfo.address}
							onChange={handleChange}
							required
						/>
						{!submitted && (
							<>
								<div></div>
								<div>
									<Link to='/cart' className='btn'>
										kiểm tra giỏ hàng
									</Link>
									<button
										type='submit'
										className='btn'
										// style={{ gridColumn: '1/-1' }}
									>
										Đặt hàng
									</button>
								</div>
							</>
						)}

						<div
							style={{
								margin: '1rem 0',
								fontSize: '2rem',
								gridColumn: '1/-1',
							}}
						>
							{submitted && (
								<div className='flex'>
									<h4>
										Cảm ơn bạn đã đặt hàng chúng tôi sẽ liên hệ lại
									</h4>
									<Link
										to='/products'
										className='btn'
										onClick={clearCart}
									>
										trở lại
									</Link>
								</div>
							)}
							{error ? `Unexpected error: ${error}` : null}
							{loading && <h4>Đơn hàng đang được gửi đi </h4>}
						</div>
					</div>
				</form>
			</Wrapper>
		</main>
	);
};

const Wrapper = styled.section`
	.empty {
		margin-top: 10%;
		text-align: center;
		h2 {
			margin-bottom: 2rem;
			text-transform: none;
		}
	}

	h5 {
		margin-top: 1.5rem;
		text-align: center;
		text-transform: uppercase;
		color: var(--clr-gray-2);
	}
	.page {
		display: block;
	}

	.grid {
		max-width: 500px;
		margin: auto;
		display: flex;
		flex-direction: column;
		padding: 0 2rem;
	}
	.flex {
		display: flex;
		flex-direction: column;
	}
	input {
		padding: 0.5rem;
		background: hsl(210, 36%, 96%);
		border-radius: 2px;
		border-color: transparent;
		letter-spacing: 0.1rem;
	}
	.btn {
		margin-top: 1rem;
		margin-right: 1rem;
	}
	@media (min-width: 600px) {
		.grid {
			display: grid;
			grid-template-columns: 100px auto;
			gap: 1rem;
			padding: 0;
			.btn {
				text-align: center;
			}
		}
	}
`;

export default Checkout;
