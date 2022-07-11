import React from 'react';
import styled from 'styled-components';
import shopee from '../assets/shopee.png';
import facebook from '../assets/facebook.png';
const Footer = () => {
	return (
		<Container>
			<div>
				<h5>
					&copy;{new Date().getFullYear()}
					<span> Đặc sản An Nhiên </span>
					created by <span>Bien-Dev</span>
				</h5>
			</div>
			<div>
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
		</Container>
	);
};

const Container = styled.footer`
	height: 5rem;
	display: flex;
	justify-content: space-evenly;
	align-items: center;

	background: var(--clr-bg-1);
	text-align: center;

	h5 {
		color: var(--clr-white);
		margin: 0.1rem;
		font-weight: 400;
		text-transform: none;
		line-height: 1.25;
	}
	.text-grey {
		color: var(--clr-grey-8);
		opacity: 0.75;
	}
	img {
		height: 50px;
		&:hover {
			opacity: 0.5;
		}
	}
	.facebook-icon {
		height: 40px;
	}
`;

export default Footer;
