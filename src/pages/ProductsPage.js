import React from 'react';
import styled from 'styled-components';
import { PageHero, Filters, Sort, ProductList } from '../components';
const Products = () => {
	return (
		<main>
			<PageHero title='gian hàng' />
			<Wrapper className='page'>
				<div className='section-center products'>
					<Filters />
					<div>
						<Sort />
						<ProductList />
					</div>
				</div>
			</Wrapper>
		</main>
	);
};

const Wrapper = styled.div`
	.products {
		display: grid;
		gap: 3rem 1.5rem;
		margin: 4rem auto;
	}
	@media (min-width: 768px) {
		.products {
			grid-template-columns: 200px 1fr;
		}
	}
`;
export default Products;
