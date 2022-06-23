import { TextField } from '@mui/material';
import React from 'react';
import { returnLabelName } from '../../utils/convertNameToLabel';

const TextFieldComponent = ({
	onBlur,
	onChange,
	value,

	label,
	InputProps,
}) => {
	return (
		<TextField
			label={returnLabelName(label)}
			fullWidth
			variant="standard"
			onBlur={onBlur}
			onChange={onChange}
			checked={value}
			// inputRef={ref}
			InputProps={InputProps}
		/>
	);
};

export default TextFieldComponent;
