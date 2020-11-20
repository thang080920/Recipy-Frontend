import React from 'react'
import styled from 'styled-components'
import { darken } from 'polished'

import style from './Button.module.scss'

import { PRIMARYCOLOR } from '../../config'

const StyledButton = styled.button`
	height: 32px;
	width: ${props => (props.fullSize ? '100%' : 'auto')};
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
	const { fullSize, text, primary, disabled, onClick } = props

	let className = style.DefaultButton
	if (primary) className += ` ${style.PrimaryButton}`

	return (
		<>
			<StyledButton
				onClick={onClick}
				fullSize={fullSize}
				disabled={disabled}
				className={className}
				primary={primary}>
				{text}
			</StyledButton>
		</>
	)
}

Button.defaultProps = {
	text: 'Button',
	primary: false,
	fullSize: false,
	disabled: false,
}

export default Button
