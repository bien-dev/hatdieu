import React from "react"
import styled from "styled-components"

const Footer = () => {
	return (
		<Container>
			<div>
				<h5>
					&copy;{new Date().getFullYear()}
					<span> Your Store </span>
					created by <span>Bien-Dev</span>
				</h5>
			</div>
			<div>
				<h5 className='text-grey'>bienpham.dev@gmail.com</h5>
			</div>
		</Container>
	)
}

const Container = styled.footer`
	height: 5rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background: var(--clr-black);
	text-align: center;
	span {
		color: var(--clr-primary-5);
	}
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
`

export default Footer