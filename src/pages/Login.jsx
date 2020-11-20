import React from 'react'
import Button from '../components/Button'

let handleClick = e => {
	console.log('clicked')
}

const Login = () => {
	return (
		<div>
			<Button disabled primary onClick={handleClick} />
		</div>
	)
}

export default Login
