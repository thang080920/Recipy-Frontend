import React from 'react'
import Button from '../components/Button'

let handleClick = e => {
	console.log('clicked')
}

const Login = () => {
	return (
		<div>
			<Button primary onClick={handleClick} />
		</div>
	)
}

export default Login
