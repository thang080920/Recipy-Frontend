import React, { useState } from 'react'
import Checkbox from '../components/Checkbox'
import Button from '../components/Button'

const Login = () => {
	const [check, setCheck] = useState(false)

	function handleClick(e) {
		console.log(!check)
		setCheck(!check)
	}

	return (
		<div>
			<Checkbox text="testing" onChange={handleClick} />
			<Button onClick={handleClick} />
		</div>
	)
}

export default Login
