import React from 'react'
import styled from 'styled-components'

const Contact = () => {
	return (
		<Wrapper>
			<div className='section-center'>
				<h3>Để lại lời nhắn cho chúng tôi</h3>

				<form
					className='contact-form'
					action='https://formspree.io/f/mjvldpro'
					method='POST'
				>
					<input
						type='text'
						placeholder='họ và tên'
						className='form-input'
						name='name'
						required
						onInvalid={(e) =>
							e.target.setCustomValidity('hãy điền tên của bạn')
						}
						onInput={(e) => e.target.setCustomValidity('')}
					/>
					<input
						type='tel'
						placeholder='số điện thoại'
						className='form-input'
						name='phone'
						required
						onInvalid={(e) =>
							e.target.setCustomValidity('hãy điền số điện thoại')
						}
						onInput={(e) => e.target.setCustomValidity('')}
					/>
					<input
						type='email'
						placeholder='email'
						className='form-input'
						name='email'
					/>
					<textarea
						name='message'
						cols='30'
						rows='10'
						placeholder='nội dung tin nhắn'
						className='form-input'
						required
					></textarea>

					<button className='submit-btn'>Gửi tin nhắn</button>
				</form>
			</div>
		</Wrapper>
	)
}

const Wrapper = styled.section`
	padding: 5rem 0;
	text-align: center;
	h3 {
		text-transform: none;
	}
	p {
		line-height: 2;
		max-width: 45em;
		color: var(--clr-grey-5);
	}
	.section-center {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.contact-form {
		display: grid;
		gap: 1rem;
		width: 90%;
		@media (min-width: 800px) {
			width: 50vw;
		}
	}

	.form-input,
	.submit-btn {
		font-size: 1rem;
		padding: 0.5rem 1rem;
		border: 2px solid var(--clr-black);
	}
	.form-input {
		color: var(--clr-grey-3);
		border-top-left-radius: var(--radius);
		border-bottom-left-radius: var(--radius);
	}

	.form-input::placeholder {
		color: var(--clr-black);
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
			Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
			sans-serif;
		opacity: 0.5;
	}
	.submit-btn {
		background: var(--clr-primary-5);
		text-transform: capitalize;
		letter-spacing: var(--spacing);
		cursor: pointer;
		transition: var(--transition);
		color: var(--clr-black);
		border-radius: var(--radius);
	}
	.submit-btn:hover {
		color: var(--clr-white);
	}

	@media (min-width: 1280px) {
		padding: 15rem 0;
	}
`

export default Contact
