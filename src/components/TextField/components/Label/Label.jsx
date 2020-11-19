import React from 'react'
import style from './Label.module.scss'

const Label = props => {
	const { id, label, required } = props
	return (
		<>
			<label
				className={`${style.Label} ${required ? style.LabelIsRequired : ''}`}
				htmlFor={id}>
				{label}
			</label>
		</>
	)
}

export default Label
