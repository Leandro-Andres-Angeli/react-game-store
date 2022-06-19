import { TextField } from '@mui/material';
import React from 'react';
import { Controller } from 'react-hook-form';
import { returnLabelName } from '../../../utils/convertNameToLabel';
import InputCustomMask from './InputCustomMask';

const InputController = ({
	control,
	name,
	pattern,
	rules,
	flipped,
	setFlipped,
	inputProps,
}) => {
	console.log(inputProps);
	return (
		<Controller
			defaultValue=""
			{...{ name }}
			control={control}
			render={({ field: { onChange: onChangeReactHookForm, value } }) => {
				return (
					<TextField
					
						size="small"
						label={returnLabelName(name)}
						value={value}
						onChange={onChangeReactHookForm}
						fullWidth
						onFocus={() => {
							return flipped ? setFlipped('flipped') : null;
						}}
						onBlur={() => {
							return flipped ? setFlipped('not-flipped') : null;
						}}
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
