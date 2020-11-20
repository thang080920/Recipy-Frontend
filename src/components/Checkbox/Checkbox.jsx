import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import style from './Checkbox.module.scss'

import useUniqueId from '../../hooks/useUniqueId'
import { PRIMARYCOLOR } from '../../config'

const CheckboxInner = styled.div`
	width: 16px;
	height: 16px;
	background-color: ${props => (props.checked ? PRIMARYCOLOR : '#fff')};
	border: 1px solid ${props => (props.checked ? PRIMARYCOLOR : '#605e5c')};
	border-radius: 2px;

	cursor: pointer;

	position: relative;
	transition: all ease-in-out 0.2s;

	&::after {
		transition: transform cubic-bezier(0.12, 0.4, 0.29, 1.46) 0.2s;
		position: absolute;
		content: '';
		top: 50%;
		width: 3px;
		height: 7px;
		left: 20%;
		border: 2px solid white;
		border-top: none;
		border-left: none;

		transform: rotate(45deg) scale(0) translate(-55%, -55%);
	}
`

const Checkbox = props => {
	let checkboxStyle = {
		display: 'none',
	}

	const { checked, onChange } = props

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
		<>
			<label htmlFor={id}>
				<CheckboxInner
					className={isChecked ? style.CheckboxChecked : ''}
					checked={isChecked ?? false}
				/>
			</label>
			<input
				id={id}
				checked={checked}
				onChange={handleChange}
				type="checkbox"
				style={checkboxStyle}
			/>
		</>
	)
}

export default Checkbox
