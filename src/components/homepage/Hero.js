import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import heroBcg from '../../assets/wooden-livingroom.jpeg'
import heroBcg2 from '../../assets/person-woodworking.jpeg'

const Hero = () => {
	return (
		<Wrapper className='section-center'>
			<article className='content'>
				<h1>
					design your <br />
					comfort zone
				</h1>
				<p>
					Designing your home is a big task and it can be a daunting
					experience. It is important to have the right furniture and
					items in your house, so that you can enjoy the space you
					live in. It is important to keep comfort in mind when
					designing your home. <br />
					<strong>Let we help you make the best of your home.</strong>
				</p>
				<Link to='/products' className='btn hero-btn'>
					shop now
				</Link>
			</article>
			<div className='img-container'>
				<img src={heroBcg} alt='living room' className='main-img' />
				{/* <img
					src={heroBcg2}
					alt='a man working'
					className='accent-img'
				/> */}
			</div>
		</Wrapper>
	)
}

const Wrapper = styled.section`
	min-height: 60vh;
	display: grid;
	place-items: center;
	.img-container {
		display: none;
	}
	p {
		line-height: 2;
		max-width: 45em;
		margin-bottom: 2rem;
		color: var(--clr-grey-5);
		font-size: 1rem;
	}
	@media (min-width: 992px) {
		height: calc(100vh - 5rem);
		grid-template-columns: 1fr 1fr;
		gap: 8rem;
		.content {
			background-image: url({heroBcg2});
		}
		h1 {
			margin-bottom: 2rem;
		}
		p {
			font-size: 1.25rem;
		}
		.hero-btn {
			padding: 0.75rem 1.5rem;
			font-size: 1rem;
		}
		.img-container {
			display: block;
			position: relative;
		}
		.main-img {
			width: 100%;
			height: 500px;
			position: relative;
			border-radius: var(--radius);
			display: block;
		}
		.accent-img {
			position: absolute;
			bottom: 0;
			left: 0;
			width: 300px;
			transform: translateX(100%);
			border-radius: var(--radius);
		}
		.img-container::before {
			content: '';
			position: absolute;
			width: 10%;
			height: 50%;
			background: var(--clr-primary-8);
			bottom: 0%;
			left: -8%;
			border-radius: var(--radius);
		}
	}
`
export default Hero
