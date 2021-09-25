import React from 'react'
import TextField from './_TextField'

/* eslint-disable */
const TextFieldConnection = ({
	type = 'text',
	name = 'text',
	label = 'Text',
	placeholder = ''
}) => {
	return (
		<TextField name={ name }>
			{({ field, meta }) => (
				<TextField.Control isInvalid={ meta.touched && meta.error }>
					<TextField.Label htmlFor={ name } text={ label } />

					<TextField.Input
						type={ type }
						id={ name }
						name={ name }
						placeholder={ placeholder }
						// { ...field }
						value={ field.value }
						onChange={ field.onChange }
						onBlur={ field.onBlur }
					/>

					{
						meta.touched && meta.error &&
						<TextField.Error text={ meta.error } />
					}
				</TextField.Control>
			)}
		</TextField>
	)
}

export default TextFieldConnection
