import React, { useState } from 'react'
import TextField from '../components/TextField'

let useInput = initialValue => {
	const [val, setVal] = useState(initialValue)

	function handleChange(e) {
		console.log(e.target.value)
		setVal(e.target.value)
	}
	return {
		value: val,
		onChange: handleChange,
	}
}

const Login = () => {
	const input = useInput('')
	return (
		<div>
			{input.value}
			<TextField {...input} />
		</div>
	)
}

export default Login
