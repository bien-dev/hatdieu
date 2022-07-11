import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import heroBcg from '../../assets/Xuan.jpeg'

const Hero = () => {
	return (
		<main>
			<Wrapper>
				<div className='section-center'>
					<div className='img-container'>
						<img src={heroBcg} alt='my xuan' className='main-img' />
					</div>
					<article>
						<div className='content'>
							<h2>
								CÂU CHUYỆN VỀ <br />
								ĐẶC SẢN AN NHIÊN
							</h2>
							<p>
								Sinh ra và lớn lên tại mảnh đất Tây Nguyên đầy nắng và
								gió, Đặc sản An Nhiên có sứ mệnh đưa những sản phẩm
								thơm ngon nhất, chất lượng nhất của Núi rừng Tây
								Nguyên đến người dân trên khắp mọi miền đất nước Việt
								Nam!
							</p>
							<p>
								Tất cả các sản phẩm của Đặc sản An Nhiên đều có nguồn
								gốc xuất xứ rõ ràng và được kiểm nghiệm vệ sinh an
								toàn thực phẩm, hoàn toàn không có chất bảo quản hay
								bất kỳ hóa chất độc hại nào,{' '}
								<strong>
									vô cùng tốt cho sức khỏe người tiêu dùng!
								</strong>
							</p>
						</div>
						<div className='center'>
							<Link to='/products' className='btn hero-btn'>
								tới gian hàng
							</Link>
						</div>
					</article>
				</div>
			</Wrapper>
			<Thank className='thanksnote section-center'>
				<div className='center'>
					<h3>Lời cảm ơn</h3>
					<h4>
						Xin cảm ơn quý khách hàng đã lựa chọn Đặc sản An Nhiên
						trong muôn vàn sự lựa chọn! Kính chúc quý khách thật nhiều
						Sức khỏe và Bình an trong cuộc sống!
					</h4>
				</div>
			</Thank>
		</main>
	)
}

const Wrapper = styled.section`
	background: var(--clr-bg-1);
	.content {
		position: relative;
		color: white;

		h2 {
			line-height: 2rem;
			color: whitesmoke;
			position: relative;
			font-size: 1.5rem;
			padding-top: 20px;
			text-align: center;
		}
	}
	p {
		color: white;
		font-size: 1rem;
		line-height: 2rem;
	}

	.section-center {
		min-height: 70vh;
		display: grid;
		grid-auto-flow: dense;
		place-items: center;
		.img-container {
			object-fit: cover;
		}
		.main-img {
			margin-top: 50px;
			width: 100%;
			height: 100%;
			position: relative;
			border-radius: var(--radius);
			display: block;
			/* box-sizing: content-box; */
		}
		.center {
			display: flex;
			justify-content: center;
			margin-bottom: 30px;
		}

		@media (min-width: 992px) {
			/* background: var(--clr-bg-1); */

			padding-top: 20px;
			padding-bottom: 20px;
			grid-template-columns: 1fr 1fr;
			gap: 8rem;
			.content::before {
				display: none;
			}
			h2 {
				margin-bottom: 2rem;
				line-height: 3rem;
				font-size: 2rem;
			}
			p {
				font-size: 1.25rem;
				line-height: 2.5rem;
				margin-top: 0;
			}
			.hero-btn {
				padding: 0.75rem 1.5rem;
				font-size: 1rem;
				margin-left: 50%;
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
				border: 10px solid white;
				box-sizing: content-box;
			}
		}
	}
`
const Thank = styled.div`
	color: var(--text-2);
	text-align: center;
	min-height: 300px;
	max-width: 600px;
	padding-top: 20px;
	position: relative;
	.center {
		margin: 0;
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		padding: 20px;
		border: 2px dashed green;
		border-radius: 4px;
	}
	h3,
	h4 {
		text-transform: none;
	}
	h4 {
		font-weight: 400;
	}
`
export default Hero
