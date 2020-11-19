import React from 'react'
import styled from 'styled-components'
import { darken } from 'polished'

import style from './Button.module.scss'

import { PRIMARYCOLOR } from '../../config'

const StyledButton = styled.button`
	height: 32px;
	background-color: ${props => (props.primary ? PRIMARYCOLOR : '#fff')};

	&:hover {
		background-color: ${props =>
			darken(0.05, props.primary ? PRIMARYCOLOR : '#fff')};
	}

	&:active {
		background-color: ${props =>
			darken(0.1, props.primary ? PRIMARYCOLOR : '#fff')};
	}
`

const Button = props => {
	const { text, primary, onClick } = props

	let className = style.DefaultButton
	if (primary) className += ` ${style.PrimaryButton}`

	return (
		<>
			<StyledButton onClick={onClick} className={className} primary={primary}>
				{text}
			</StyledButton>
		</>
	)
}

Button.defaultProps = {
	text: 'Button',
	primary: false,
}

export default Button
