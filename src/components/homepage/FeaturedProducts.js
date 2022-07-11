import React from 'react';
// import { useProductsContext } from '../../context/products_context'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Product from './Product';
import products_data from '../../assets/all-products.json';
import shopee from '../../assets/shopee.png';
import facebook from '../../assets/facebook.png';

const FeaturedProducts = () => {
	const data = products_data;
	return (
		<Wrapper className='section'>
			<div className='title'>
				<h2>các sản phẩm chính</h2>
				<div className='underline'></div>
			</div>
			<div className='section-center featured'>
				{data.map((product) => {
					return <Product key={product.id} {...product} />;
				})}
			</div>
			<div className='links'>
				<Link to='/products' className='btn'>
					Tất cả sản phẩm
				</Link>
			</div>
			<div className='links box'>
				<span>
					<h3>Hoặc mua hàng tại:</h3>{' '}
				</span>
				<a
					href='https://shopee.vn/annhiendacsantaynguyen?categoryId=100629&itemId=14766347809%27'
					target='_blank'
					rel='noreferrer'
				>
					<img src={shopee} alt='shopee icon' />
				</a>
				<a
					href='https://www.facebook.com/AnNhienDacsanTayNguyen/'
					target='_blank'
					rel='noreferrer'
				>
					<img
						src={facebook}
						alt='facebook icon'
						className='facebook-icon'
					/>
				</a>
			</div>
		</Wrapper>
	);
};

const Wrapper = styled.section`
	color: var(--text-2);
	background: var(--clr-grey-9);
	.featured {
		margin: 4rem auto;
		display: grid;
		gap: 2.5rem;
		img {
			height: 300px;
		}
	}
	h3 {
		color: black;
		text-transform: none;
		font-size: 1.5rem;
	}

	a img {
		width: 75px;
		margin: 10px;
		opacity: 0.5;
		&:hover {
			opacity: 1;
		}
	}
	.facebook-icon {
		width: 60px;
	}
	.links {
		display: block;
		text-align: center;
		margin: 0 auto;
		padding-bottom: 2rem;
	}
	.box {
		max-width: 500px;
		border: 2px dashed white;
		padding-top: 10px;
	}
	.btn {
		width: 200px;
		margin-left: 20px;
		text-align: center;
	}
	@media (min-width: 576px) {
		.featured {
			grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
		}
	}
`;

export default FeaturedProducts;
