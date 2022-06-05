import { TextField } from '@mui/material';
import React from 'react';
import { Controller } from 'react-hook-form';
import InputCustomMask from './InputCustomMask';

const InputController = ({ control, name, pattern, rules }) => {
	return (
		<Controller
			defaultValue=""
			{...{ name }}
			control={control}
			render={({ field: { onChange: onChangeReactHookForm, value, ref } }) => {
				return (
					<TextField
						size="small"
						label="card number"
						value={value}
						onChange={onChangeReactHookForm}
						fullWidth
						InputProps={{
							inputComponent: InputCustomMask,
							inputProps: { pattern },
						}}
					></TextField>
				);
			}}
			{...{ rules }}
		></Controller>
	);
};

export default InputController;
