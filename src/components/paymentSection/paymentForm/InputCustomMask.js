import React from 'react';
import { IMaskInput } from 'react-imask';
import IMask from 'imask';
const InputCustomMask = React.forwardRef(function TextMaskCustom(
	props,
	ref,
	inputType
) {
	const { onChange, register, pattern, errors, ...other } = props;

	return (
		<IMaskInput
			{...other}
			type={inputType | 'text'}
			mask={props.pattern}
			maxLength={props.pattern === 'x' ? 16 : ''}
			definitions={{
				0: /[1-9]/,
			}}
			blocks={{
				x: {
					mask: /^[a-zA-Z\s]*$/,
				},
				Y: {
					mask: IMask.MaskedRange,
					from: new Date().getFullYear().toString().slice(-2) * 1,
					to: 99,
					maxLength: 2,
				},
				m: {
					mask: IMask.MaskedRange,
					from: 1,
					to: 12,
					maxLength: 2,
				},
			}}
			inputRef={ref}
			onAccept={(value) => onChange({ target: { name: props.name, value } })}
			overwrite
		/>
	);
});

export default InputCustomMask;
