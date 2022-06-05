import React from 'react';
import { IMaskInput } from 'react-imask';

const InputCustomMask = React.forwardRef(function TextMaskCustom(props, ref) {
	const { onChange, register, pattern, errors, ...other } = props;

	return (
		<IMaskInput
			{...other}
			mask={props.pattern}
			definitions={{
				'#': /[1-9]/,
			}}
			inputRef={ref}
			onAccept={(value) => onChange({ target: { name: props.name, value } })}
			overwrite
		/>
	);
});

export default InputCustomMask;
