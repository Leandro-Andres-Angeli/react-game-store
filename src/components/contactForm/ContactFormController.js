import { TextField } from '@mui/material';
import React from 'react';
import { Controller } from 'react-hook-form';
import TextFieldComponent from './TextFieldComponent';

const ContactFormController = ({
	name,
	control,
	rules,
	register,
	InputProps,
}) => {
	return (
		<Controller
			{...register(name)}
			control={control}
			name={name}
			rules={rules}
			render={({
				field: { onChange, onBlur, value, name, ref },
				fieldState: { invalid, isTouched, isDirty, error },

				formState,
			}) => (
				<TextFieldComponent
					{...{ onBlur, onChange, value, ref, InputProps }}
					label={name}
				>
					{' '}
				</TextFieldComponent>
			)}
		></Controller>
	);
};

export default ContactFormController;
