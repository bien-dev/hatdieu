import React from 'react'
import styled from 'styled-components'
import { FiCheckSquare } from 'react-icons/fi'

const Benefits = () => {
	return (
		<Wrapper className='section section-center title'>
			<h2 className='title'>Quyền lợi của khách hàng</h2>
			<div className='underline'></div>
			<div>
				<h4>
					<FiCheckSquare /> Khách hàng được quyền kiểm hàng, thử hàng
					trước khi nhận!
				</h4>
				<h4>
					<FiCheckSquare /> Bao đổi trả, hoàn tiền 100% nếu khách hàng
					không hài lòng với chất lượng của sản phẩm.
				</h4>
				<h4>
					<FiCheckSquare /> Được tặng những món quà giá trị và ý nghĩa
					khi mua hàng tại Đặc sản An Nhiên!
				</h4>
				<h4>
					<FiCheckSquare /> Được tư vấn, phục vụ một cách tận tình và
					chu đáo nhất bởi slogan của Đặc sản An Nhiên là “Bán hàng
					bằng Tâm”, bằng cả trái tim!
				</h4>
			</div>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	max-width: 800px;
	.underline {
		margin-bottom: 2rem;
	}

	@media (min-width: 600px) {
		color: black;
		padding: 3rem;
		margin-top: 80px;
		margin-bottom: 80px;
		background-color: var(--clr-bg-1);
		border: 4px solid var(--clr-logo);
	}

	h2 {
		text-align: center;
		/* margin-bottom: 2rem; */
	}
	h4 {
		text-transform: none;
		font-size: 1.25rem;
		font-weight: 400;
		margin-bottom: 2rem;
		text-align: left;
		display: grid;
		grid-template-columns: 50px 1fr;
	}
	svg {
		font-size: 1.5rem;
	}
`

export default Benefits
