import React from 'react';
import styled from 'styled-components';

const ContactDetails = () => {
	return (
		<Wrapper>
			<div className='section section-center'>
				<button className='btn'>
					<h3>Đặc sản An Nhiên</h3>
				</button>
				<hr />

				<div className='contact'>
					<div>
						<h5>
							Địa chỉ: Buôn Đông Thuớ, xã Chư Gu, Krông Pa, Gia Lai
						</h5>
						<h5>Hotline: 08.999.64.555 – 094.173.5088</h5>

						<h5>dacsantaynguyenannhien@gmail.com</h5>
					</div>
					<div>
						<h5>GIẤY PHÉP: </h5>
						<h5>Giấy phép ĐKKD số: 39M8001895 </h5>
						<h5>VSATTP số: 01/2022/NNPTNT-KRPGL</h5>
					</div>
				</div>
				<div className='fanpage'></div>
			</div>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	background-color: var(--clr-grey-10);
	.section {
		margin-top: 0;
		padding-top: 0;
	}
	.btn {
		margin-bottom: 2rem;
		h3 {
			color: white;
		}
	}
	.contact {
		margin-top: 1rem;
		display: grid;
		gap: 1rem;

		@media (min-width: 800px) {
			grid-template-columns: 1fr 1fr;
		}
	}
	h3,
	h5 {
		text-transform: none;
		font-family: 'Helvetica Neue';
		color: black;
	}
	h5 {
		line-height: 15px;
	}

	.title {
		text-align: left;
	}
	.underline {
		margin-left: 0;
	}
`;

export default ContactDetails;
