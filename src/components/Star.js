import React from "react"
import styled from "styled-components"
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs"

function Star({ stars, reviews }) {
	console.log(stars)
	const starsArray = Array.from({ length: 5 }, (_, index) => {
		const number = index + 0.5
		return (
			<span key={index}>
				{stars > number ? (
					<BsStarFill />
				) : stars > index ? (
					<BsStarHalf />
				) : (
					<BsStar />
				)}
			</span>
		)
	})

	return (
		<Wrapper>
			<div className='stars'>{starsArray}</div>
			<div className='reviews'>({reviews} customer reviews)</div>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	display: flex;
	align-items: center;
	span {
		color: #ffb900;
		font-size: 1rem;
		margin-right: 0.25rem;
	}
	p {
		margin-left: 0.5rem;
		margin-bottom: 0;
	}
	margin-bottom: 0.5rem;
`

export default Star
