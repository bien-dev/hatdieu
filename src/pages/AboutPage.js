import React from 'react'
import styled from 'styled-components'
import { PageHero } from '../components'
import aboutImg from '../assets/person-woodworking.jpeg'

const About = () => {
	return (
		<main>
			<PageHero title='about' />
			<Wrapper className='page section section-center'>
				<img src={aboutImg} alt='a desk' />
				<article>
					<div className='title'>
						<h2>our story</h2>
						<div className='underline'></div>
					</div>
					<p>
						Your Store is an online furniture selling store that has
						been in business for over a decade. It started with only 3
						people. The friends all worked at a local furniture store,
						fed up with the lack of customer services and the quality
						of products there. We wanted to do something different, so
						we pooled their savings together to open up our own store.
						Years later, Your Store has come online.
					</p>
				</article>
			</Wrapper>
		</main>
	)
}

const Wrapper = styled.section`
	display: grid;
	gap: 4rem;
	img {
		width: 100%;
		display: block;
		border-radius: var(--radius);
		height: 500px;
		object-fit: cover;
	}
	p {
		line-height: 2;
		max-width: 45em;
		margin: 0 auto;
		margin-top: 2rem;
		color: var(--clr-grey-5);
	}
	.title {
		text-align: left;
	}
	.underline {
		margin-left: 0;
	}
	@media (min-width: 992px) {
		grid-template-columns: 1fr 1fr;
	}
`

export default About
