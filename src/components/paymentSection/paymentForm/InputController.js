import { TextField } from '@mui/material';
import React from 'react';
import { Controller } from 'react-hook-form';
import { returnLabelName } from '../../../utils/convertNameToLabel';
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
						label={returnLabelName(name)}
						value={value}
						onChange={onChangeReactHookForm}
						fullWidth
						// onClick={(e) => {
						// 	console.log(e);
						// }}
						// onFocus={(e) => {
						// 	console.log('e');
						// }}
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
