import React from 'react'
import TextField from './_TextField'

/* eslint-disable */
const TextFieldConnection = ({
	name = 'text',
	label = 'Text',
	placeholder = ''
}) => {

	const inputProps = {
		autoComplete: 'off',
		autoCorrect: 'off',
		autoCapitalize: 'off',
		spellCheck: 'false',
    placeholder
		// autoFocus: { true }
	}

	return (
		<TextField name={ name }>
			{({ field, meta }) => (
				<TextField.Control isInvalid={ meta.touched && meta.error }>
					<TextField.Label htmlFor={ name } text={ label } />
					<TextField.Input id={ name } { ...inputProps } { ...field } />
					{	meta.touched && meta.error && <TextField.Error text={ meta.error } /> }
				</TextField.Control>
			)}
		</TextField>
	)
}

export default TextFieldConnection
