import React from 'react';
import styled from 'styled-components';
import { PageHero } from '../components';
import aboutImg from '../assets/landscape/xuancashewfruits.jpeg';

const About = () => {
	return (
		<main>
			<PageHero title='về An Nhiên' />
			<Wrapper className='page section section-center'>
				<img src={aboutImg} alt='a desk' />
				<article>
					<div className='title'>
						<h2>Về Đặc sản An Nhiên</h2>
						<div className='underline'></div>
					</div>
					<p>
						Sinh ra và lớn lên tại mảnh đất Tây Nguyên đầy nắng và
						gió, Đặc sản An Nhiên có sứ mệnh đưa những sản phẩm thơm
						ngon nhất, chất lượng nhất của Núi rừng Tây Nguyên đến
						người dân trên khắp mọi miền đất nước Việt Nam! Tất cả các
						sản phẩm của Đặc sản An Nhiên đều có nguồn gốc xuất xứ rõ
						ràng và được kiểm nghiệm vệ sinh an toàn thực phẩm, hoàn
						toàn không có chất bảo quản hay bất kỳ hóa chất độc hại
						nào, vô cùng tốt cho sức khỏe người tiêu dùng!
					</p>
				</article>
			</Wrapper>
		</main>
	);
};

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
		line-height: 2.5rem;
		max-width: 45em;
		margin: 0 auto;
		margin-top: 2rem;
		color: var(--clr-grey-5);
	}
	h2 {
		line-height: 3rem;
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
`;

export default About;
