import React from 'react'
import style from './Prefix.module.scss'

const Prefix = props => {
	const { disabled } = props
	return (
		<div
			className={`${style.PrefixWrapper} ${
				disabled ? style.PrefixDisabled : ''
			}`}>
			{props.children}
		</div>
	)
}

export default Prefix
