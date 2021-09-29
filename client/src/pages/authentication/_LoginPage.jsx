import React from 'react'
import { Frame } from '../../components'
import { LoginForm } from '../../containers'

const LoginPage = () => {
	return (
		<Frame.Main>
			<Frame.Wrapper>
				<LoginForm />
			</Frame.Wrapper>
		</Frame.Main>
	)
}

export default LoginPage
