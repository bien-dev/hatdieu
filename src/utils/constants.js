import React from 'react'
import {
	GiCompass,
	GiDiamondHard,
	GiStabbedNote,
} from 'react-icons/gi'
export const links = [
	{
		id: 1,
		text: 'home',
		url: '/',
	},
	{
		id: 2,
		text: 'about',
		url: '/about',
	},
	{
		id: 3,
		text: 'products',
		url: '/products',
	},
]

export const services = [
	{
		id: 1,
		icon: <GiCompass />,
		title: 'mission',
		text: 'Your Store is a furniture store with a mission to make sure that all customers can get quality and affordable furniture. They have a wide range of products for all budgets and spaces. They also offer free delivery and installation services.',
	},
	{
		id: 2,
		icon: <GiDiamondHard />,
		title: 'vision',
		text: 'Your Store is a furniture selling store that has been in business for over 10 years. They have a vision to provide quality furniture at affordable prices to their customers.',
	},
	{
		id: 3,
		icon: <GiStabbedNote />,
		title: 'history',
		text: 'Your Store is an online furniture selling store that has been in business for over a decade. It started with only 3 people. We wanted to do something different, so we pooled their savings together to open up our own store.',
	},
]

export const products_url =
	'https://course-api.com/react-store-products'

export const single_product_url = `https://course-api.com/react-store-single-product?id=`
