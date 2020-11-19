import React from 'react'
import styled from 'styled-components'

import style from './Input.module.scss'

import Prefix from '../Prefix'

import { PRIMARYCOLOR } from '../../../../config'

const InputBorder = styled.div`
	color: ${props => props.blurColor};
	border-color: ${props => props.blurColor};
	height: ${props => props.heightValue};

	input {
		font-size: ${props => props.fontSizeValue};
	}
	overflow: hidden;

	position: relative;

	&:focus-within::after {
		content: '';
		position: absolute;
		border-color: ${props => props.focusColor};
		top: -1px;
		left: -1px;
		right: -1px;
		bottom: -1px;
		pointer-events: none;
	}

	&:focus-within {
		border-color: ${props => props.focusColor};
	}
`

let calculateHeight = size => {
	switch (size) {
		case 'small':
			return '25px'
		default:
			return '32px'
	}
}

let calculateFontSize = size => {
	switch (size) {
		case 'small':
			return '12px'
		default:
			return '14px'
	}
}

const Input = props => {
	const {
		placeholder,
		id,
		underline,
		size,
		value,
		onChange,
		disabled,
		readonly,
		prefix,
		error,
	} = props

	const height = calculateHeight(size)
	const fontSize = calculateFontSize(size)

	const blurColor = error ? '#a4262c' : '#605e5c'
	const focusColor = error ? '#a4262c' : PRIMARYCOLOR

	return (
		<InputBorder
			className={
				underline
					? style.InputUnderline
					: disabled
					? style.InputDisabled
					: style.InputBasic
			}
			heightValue={height}
			fontSizeValue={fontSize}
			blurColor={blurColor}
			focusColor={focusColor}>
			<div className={style.InputWrapper}>
				{/* Prefix */}
				{prefix ? <Prefix disabled={disabled} children={prefix} /> : ''}

				<input
					id={id}
					className={style.Input}
					type="text"
					placeholder={placeholder}
					value={value}
					onChange={onChange}
					disabled={disabled}
					readOnly={readonly}
				/>
			</div>
		</InputBorder>
	)
}

Input.defaultProps = {
	error: false,
}

export default Input
