import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import style from './Checkbox.module.scss'

import useUniqueId from '../../hooks/useUniqueId'
import { PRIMARYCOLOR } from '../../config'

const CheckboxInner = styled.div`
	transition: all ease-in-out 0.2s;

	background-color: ${props =>
		props.checked
			? props.disabled
				? '#c8c6c4'
				: PRIMARYCOLOR
			: props.disabled
			? '#fff'
			: '#fff'};

	border: 1px solid
		${props =>
			props.checked
				? props.disabled
					? '#c8c6c4'
					: PRIMARYCOLOR
				: props.disabled
				? '#c8c6c4'
				: '#605e5c'};

	border-radius: 2px;

	cursor: ${props => (props.disabled ? 'default' : 'pointer')};
`

const CheckboxLabel = styled.label`
	position: relative;
	width: 16px;
	height: 16px;
	box-sizing: border-box;
	display: inline-block;
`

const Checkbox = props => {
	let checkboxStyle = {
		display: 'none',
	}

	const { checked, onChange, disabled } = props

	const [isChecked, setIsChecked] = useState(checked ?? false)

	useEffect(() => {
		setIsChecked(checked)
	}, [checked])

	function handleChange(e) {
		if (typeof onChange === 'function') onChange(e)

		if (typeof checked === 'boolean') setIsChecked(checked)
		else setIsChecked(!isChecked)
	}

	const id = useUniqueId()
	return (
		<div className="CheckboxWrapper">
			<CheckboxLabel htmlFor={id}>
				<CheckboxInner
					className={`${style.CheckboxDefault} ${
						isChecked ? style.CheckboxChecked : ''
					} ${disabled ? style.CheckboxDisabled : ''}`}
					checked={isChecked ?? false}
					disabled={disabled}
				/>
			</CheckboxLabel>
			<input
				id={id}
				disabled={disabled}
				checked={checked}
				onChange={handleChange}
				type="checkbox"
				style={checkboxStyle}
			/>
		</div>
	)
}

Checkbox.defaultProps = {
	disabled: false,
}

export default Checkbox
