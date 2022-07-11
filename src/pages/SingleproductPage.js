import React from 'react';
import { useParams } from 'react-router-dom';
import { formatPrice } from '../utils/helper';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import products from '../assets/single-product.json';
import {
	PageHero,
	ProductImages,
	Star,
	AddToCart,
} from '../components';

const SingleproductPage = () => {
	const { id } = useParams();

	const product = products.find((p) => p.id === Number(id));

	const {
		name,
		amount,
		price,
		description,
		stock,
		stars,
		reviews,
		images,
	} = product;

	return (
		<Wrapper>
			<PageHero title={name} products />
			<div className='section section-center page'>
				<Link to='/products' className='btn'>
					trở về gian hàng
				</Link>
				<div className='product-center'>
					<ProductImages images={images} />
					<section className='content'>
						<h2>{name}</h2>
						<Star stars={stars} reviews={reviews} />
						<h5 className='price'>
							{formatPrice(price)}/ {amount}
						</h5>
						<p className='desc'>{description}</p>
						<p className='info'>
							<span>tình trạng : </span>
							{stock > 0 ? 'sẵn hàng' : 'hết hàng'}
						</p>

						<hr />
						{stock > 0 && <AddToCart product={product} />}
					</section>
				</div>
			</div>
		</Wrapper>
	);
};

const Wrapper = styled.main`
	color: var(--text-2);
	.product-center {
		display: grid;
		gap: 4rem;
		margin-top: 2rem;
	}
	.price {
		color: var(--clr-primary-5);
	}
	.desc {
		line-height: 2;
		max-width: 45em;
	}
	.info {
		text-transform: capitalize;
		width: 300px;
		display: grid;
		grid-template-columns: 125px 1fr;
		span {
			font-weight: 700;
		}
	}
	@media (min-width: 992px) {
		.product-center {
			grid-template-columns: 1fr 1fr;
			align-items: center;
		}
		.price {
			font-size: 1.25rem;
		}
	}
`;

export default SingleproductPage;
