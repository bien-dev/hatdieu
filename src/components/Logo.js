import React from 'react'
import logo from '../assets/logo.png'
import styled from 'styled-components'

const Logo = () => {
	return (
		<Wrapper>
			<img src={logo} alt='logo an nhien' />
		</Wrapper>
	)
}

const Wrapper = styled.div`
	display: block;
	width: 300px;
	height: 300px;
`
export default Logo
