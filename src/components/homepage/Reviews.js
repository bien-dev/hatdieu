import React, { useState, useEffect } from 'react'
import { reviews } from '../../utils/constants'
import styled from 'styled-components'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const Reviews = () => {
	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	}
	const [winWidth, setWinWith] = useState(window.innerWidth)

	const detectSize = () => {
		setWinWith(window.innerWidth)
	}
	useEffect(() => {
		window.addEventListener('resize', detectSize)
		return () => {
			window.removeEventListener('resize', detectSize)
		}
	}, [winWidth])

	console.log(typeof winWidth)

	return (
		<Wrapper>
			<div className='section-center'>
				<article className='header'>
					<h3>Nhận xét của khách hàng:</h3>
				</article>

				<div className='reviews-center'>
					{winWidth > 700 ? (
						reviews.map((review) => {
							const { id, image, name, job, text } = review
							return (
								<div
									key={id}
									className='review'
									style={{ display: 'block' }}
								>
									<img src={image} alt='khách hàng đánh giá' />
									<h4>{name}</h4>
									<h5>({job})</h5>
									<p className='decs'>{text}</p>
								</div>
							)
						})
					) : (
						<Slider {...settings}>
							{reviews.map((review) => {
								const { id, image, name, job, text } = review
								return (
									<div key={id} className='review'>
										<img src={image} alt='khách hàng đánh giá' />
										<h4>{name}</h4>
										<h5>({job})</h5>
										<p className='decs'>{text}</p>
									</div>
								)
							})}
						</Slider>
					)}
				</div>
			</div>
		</Wrapper>
	)
}

const Wrapper = styled.section`
	h3,
	h4,
	h5,
	p {
		color: black;
	}
	padding: 5rem 0;
	background: var(--clr-primary-10);
	.header h3 {
		margin-bottom: 2rem;
		text-align: center;
	}
	p {
		margin-bottom: 0;
		line-height: 1.8;
		font-size: 1.1 rem;
		text-align: left;
	}
	img {
		max-height: 250px;
		object-fit: contain;
		margin: auto;
	}
	.reviews-center {
		margin-top: 4rem;
		display: block;
		gap: 2.5rem;
	}
	div.review {
		/* margin: auto; */
		background: var(--clr-primary-7);
		text-align: center;
		padding: 1rem;
		border-radius: var(--radius);
		min-height: 600px;
		max-width: 500px;
	}

	span {
		width: 4rem;
		height: 4rem;
		display: grid;
		margin: 0 auto;
		place-items: center;
		margin-bottom: 1rem;
		border-radius: 50%;
		background: var(--clr-primary-10);
		svg {
			font-size: 2rem;
		}
	}
	@media (min-width: 992px) {
		div.review {
			max-width: 100%;
		}
	}
	@media (min-width: 576px) {
		.reviews-center {
			display: grid;
			grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
			gap: 2rem;
		}
		p.desc {
			text-align: left;
		}
		div.review {
			max-width: 100%;
		}
	}
	@media (min-width: 1280px) {
		padding: 0;
		.section-center {
			transform: translateY(5rem);
		}
		div.review {
			max-width: 100%;
		}
	}
`

export default Reviews
