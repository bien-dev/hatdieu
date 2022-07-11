import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { images } from '../../assets/landscape/data';
import { motion } from 'framer-motion';

const ImageGrid = () => {
	const [selectedImg, setSelectedImg] = useState(null);

	const handleClick = (e) => {
		if (e.target.classList.contains('backdrop')) {
			setSelectedImg(null);
		}
	};

	return (
		<Wrapper>
			<div className='section section-center'>
				<div className='title'>
					<h2>Ảnh nhà Nhiên</h2>
					<div className='underline'></div>
				</div>

				<div className='img-grid'>
					{images.map((url, index) => {
						console.log(url);
						return (
							<motion.div
								whileHover={{ opacity: 1 }}
								className='img-wrap'
								key={index}
								onClick={() => setSelectedImg(url)}
							>
								<img src={url} alt='anh phong canh' />
							</motion.div>
						);
					})}
				</div>
				{selectedImg && (
					<motion.div
						className='backdrop'
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						onClick={handleClick}
					>
						<motion.img
							src={selectedImg}
							alt='slected image'
							initial='hidden'
							animate='visible'
						/>
					</motion.div>
				)}
			</div>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	background-color: var(--clr-grey-9);
	.section {
		@media (min-width: 1280px) {
			padding-top: 10rem;
		}
	}
	.img-grid {
		margin: 20px auto;
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 20px;
		width: 100%;
		@media (min-width: 600px) {
			grid-template-columns: 1fr 1fr 1fr;
		}
	}

	.img-wrap {
		overflow: hidden;
		height: 0;
		padding: 60% 0;
		position: relative;
		opacity: 0.8;
	}
	.img-wrap img {
		min-width: 100%;
		min-height: 100%;
		max-width: 150%;
		position: absolute;
		top: 0;
		left: 0;
	}

	/* backdrop */
	.backdrop {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.5);

		img {
			display: block;
			max-width: 80%;
			max-height: 100%;
			margin: 60px auto;
			box-shadow: 3px 5px 7px rgba(0, 0, 0, 0.5);
			border: 3px solid white;
		}
	}
`;

export default ImageGrid;
