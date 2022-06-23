import { FormHelperText } from '@mui/material';
import { red } from '@mui/material/colors';
import React from 'react';

const InputErrorMsg = ({ field, mlZero }) => {
	return (
		<FormHelperText
			id="component-helper-text"
			sx={{
				marginLeft: mlZero ?? 1,
				bgcolor: red[700],
				color: 'white',

				textTransform: 'uppercase',
				width: 'fit-content',
				padding: 1,
				borderRadius: 1,
			}}
		>
			{field.message}
		</FormHelperText>
	);
};

export default InputErrorMsg;
