import React from 'react';
import { IMaskInput } from 'react-imask';
import IMask from 'imask';

const InputCustomMask = React.forwardRef(function TextMaskCustom(props, ref) {
	const { onChange, register, pattern, errors, ...other } = props;
	const currentYear = new Date().getFullYear().toString().slice(-2) * 1;

	return (
		<IMaskInput
			{...other}
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
					from: currentYear,
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
			type={other.type.tel}
			inputRef={ref}
			onAccept={(value) => onChange({ target: { name: props.name, value } })}
			overwrite
		/>
	);
});

export default InputCustomMask;
