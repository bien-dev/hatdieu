import React from 'react';
import styled from 'styled-components';
import logo from '../assets/logo.png';
import { BsTelephoneForward } from 'react-icons/bs';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { links } from '../utils/constants';
import CartButtons from './CartButtons';
import { useSidebarContext } from '../context/sidebar_context';

const Navbar = () => {
	const { openSidebar } = useSidebarContext();

	return (
		<NavContainer>
			<div className='navbar'>
				<div className='nav-center navbar'>
					<div className='nav-header'>
						<div className='phone'>
							<BsTelephoneForward />
							<a href='tel:+84941735088' className='phone-num'>
								<span>
									<b>0941735088</b>
								</span>
							</a>
						</div>
						<button
							type='button'
							className='nav-toggle'
							onClick={openSidebar}
						>
							<FaBars />
						</button>
					</div>
					<ul className='nav-links'>
						{links.map((link) => {
							const { id, text, url } = link;
							return (
								<li key={id}>
									<Link to={url}>{text}</Link>
								</li>
							);
						})}

						<li>
							<Link to='/checkout'>thanh toán</Link>
						</li>
					</ul>
					<CartButtons />
				</div>
			</div>
			<div className='logo'>
				<Link to='/'>
					<img src={logo} alt='logo' />
				</Link>
			</div>
		</NavContainer>
	);
};

const NavContainer = styled.nav`
	display: flex;
	flex-direction: column;
	height: 250px;
	.navbar {
		background: var(--clr-bg-1);
		height: 3rem;
	}

	div.phone {
		display: flex;
		align-items: center;
		padding: 0;
		margin: 0;
		svg {
			font-size: 1.5rem;
			font-weight: 700;
		}
	}
	.logo {
		margin: 0;
		padding: 0;
		display: block;
		height: calc(250px - 3rem);
	}

	.logo img {
		padding: 20px 10px 10px;
		display: block;
		margin: auto;
		max-width: 80%;
		max-height: 80%;
	}
	.logo img:hover {
		cursor: pointer;
		opacity: 0.5;
	}

	.icon {
		font-size: 1.5rem;
	}
	color: var(--text-1);
	font-size: 1rem;

	span {
		padding-left: 5px;
	}

	.phone-num {
		color: var(--text-1);
		font-size: 0.8rem;
		b {
			font-weight: 500;
		}
	}

	a:hover span {
		color: yellowgreen;
	}

	.nav-center {
		width: 90vw;
		margin: 0 auto;
		max-width: var(--max-width);
	}
	.nav-header {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 3rem;
		a {
			color: var(--clr-text-1);
			font-size: 1rem;
			letter-spacing: var(--spacing);
			padding: 0.5rem;
			&:hover {
				border-bottom: 2px solid yellowgreen;
			}
		}

		.cart-btn-wrapper {
			display: grid;
		}

		justify-content: space-between;
	}
	.nav-toggle {
		background: transparent;
		border: transparent;
		color: var(--clr-primary-2);
		cursor: pointer;
		svg {
			font-size: 2rem;
		}
	}
	.nav-links {
		display: none;
	}
	.cart-btn-wrapper {
		display: none;
	}
	@media (min-width: 992px) {
		.nav-toggle {
			display: none;
		}
		.nav-center {
			display: grid;
			grid-template-columns: auto 1fr auto;
			align-items: center;
		}
		.nav-links {
			display: flex;
			justify-content: center;
			li {
				margin: 0 0.5rem;
			}
			a {
				color: var(--clr-text-1);
				font-size: 1rem;
				text-transform: capitalize;
				letter-spacing: var(--spacing);
				padding: 0.5rem;
				&:hover {
					border-bottom: 2px solid yellowgreen;
				}
			}
		}
		.cart-btn-wrapper {
			display: grid;
		}
	}
`;

export default Navbar;
