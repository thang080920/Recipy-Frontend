import React from 'react'
import styled from 'styled-components'
import { isEmptyOrWhitespace } from '../../helpers'
import { useUniqueId } from '../../hooks'

import Label from './components/Label'
import Input from './components/Input'
import ErrorMessage from './components/ErrorMessage'

// const PRIMARYCOLOR = process.env.PRIMARY_COLOR

const TextFieldWrapper = styled.div``

const TextField = props => {
	const id = useUniqueId('TextField')

	const {
		size,
		label,
		required,
		errorMessage,
		readonly,
		value,
		onChange,
		disabled,
		underline,
		prefix,
		placeholder,
	} = props

	const error = isEmptyOrWhitespace(errorMessage)

	return (
		<TextFieldWrapper>
			{/* Label */}
			{isEmptyOrWhitespace(label) ? (
				<Label id={id} label={label} required={required} />
			) : (
				''
			)}

			{/* Input */}
			<Input
				id={id}
				size={size}
				placeholder={placeholder}
				underline={underline}
				value={value}
				onChange={onChange}
				readonly={readonly}
				disabled={disabled}
				prefix={prefix}
				error={error}
			/>

			{/* Error */}
			{error ? <ErrorMessage errorMessage={errorMessage} /> : ''}
		</TextFieldWrapper>
	)
}

TextField.defaultProps = {
	size: 'medium',
	label: undefined,
	required: false,
	errorMessage: undefined,
	readonly: false,
	disabled: false,
	underline: false,
	prefix: undefined,
	placeholder: undefined,
}

export default TextField
