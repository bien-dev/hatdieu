import React from 'react';
import { FaRegThumbsUp } from 'react-icons/fa';
import styled from 'styled-components';

const Reasons = () => {
	return (
		<Wrapper className='section section-center'>
			<div className='title'>
				<h3>VÌ SAO BẠN NÊN MUA HÀNG TẠI ĐẶC SẢN AN NHIÊN?</h3>
				<div className='underline'></div>
			</div>
			<div className='grid'>
				<h4>
					<FaRegThumbsUp />
					Nguồn nguyên liệu địa phương cực kỳ tươi ngon, không chất
					bảo quản, không hóa chất độc hại, đảm bảo vệ sinh an toàn
					thực phẩm!
				</h4>

				<h4>
					<FaRegThumbsUp />
					Không trà trộn hàng cũ, kém chất lượng vào bán để chạy theo
					lợi nhuận! Đặt quyền lợi của khách hàng lên trên hết!
				</h4>

				<h4>
					<FaRegThumbsUp />
					Dịch vụchăm sóc khách hàng tận tình chu đáo, đặt chữ “Tâm”
					chữ “Tín” lên hàng đầu!
				</h4>

				<h4>
					<FaRegThumbsUp />
					Mua hàng tại Đặc sản An Nhiên, quý khách sẽ nhận được nhiều
					hơn những gì bạn mong đợi!
				</h4>
			</div>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	max-width: 800px;
	@media (min-width: 600px) {
		color: black;
		padding: 3rem;
		margin-top: 80px;
		margin-bottom: 80px;
		background-color: var(--clr-bg-1);
		border: 4px solid var(--clr-logo);
	}
	.grid h4 {
		display: grid;
		grid-template-columns: 50px auto;
	}
	h4 {
		text-transform: none;
		font-size: 1.25rem;
		font-weight: 400;
		margin-bottom: 2rem;
	}

	.title {
		margin-bottom: 2rem;
	}
	svg {
		font-size: 1.5rem;
	}
`;

export default Reasons;
