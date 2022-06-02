import { Box, Container, Grid, TextField } from '@mui/material';
import React, { forwardRef, useRef, useState } from 'react';
import { IMaskInput } from 'react-imask';
import IMask from 'imask';
import PropTypes from 'prop-types';
import './CardStyles.css';
const TextMaskCustom = forwardRef((props, ref) => {
	const { onChange, ...other } = props;
	return (
		<IMaskInput
			{...other}
			mask="m{/}y"
			blocks={{
				m: {
					mask: IMask.MaskedRange,
					from: 1,
					to: 12,
					maxLength: 2,
				},
				y: {
					mask: IMask.MaskedRange,
					from: parseInt(new Date().getFullYear()).toString().slice(-2),
					to: 99,
					maxLength: 2,
				},
			}}
			autofix
			inputRef={ref}
			onAccept={(value) => onChange({ target: { name: props.name, value } })}
			overwrite
		/>
	);
});
TextMaskCustom.propTypes = {
	name: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
};

const CreditCard = () => {
	const creditCard = useRef();
	const [nameOwner, setNameOwner] = useState(' ');
	const [values, setValues] = useState({
		textmask: '',
		numberformat: '1320',
	});

	const handleChange = (event) => {
		setValues({
			...values,
			[event.target.name]: event.target.value,
		});
	};
	console.log(nameOwner);

	return (
		<Container>
			{' '}
			<Grid container>
				<Grid item xs={12} sm={12} md={6}>
					<Box sx={{ position: 'relative' }}>
						<Box className="creditcard" ref={creditCard}>
							<div className="front">
								<svg
									version="1.1"
									id="cardfront"
									xmlns="http://www.w3.org/2000/svg"
									xmlnsXlink="http://www.w3.org/1999/xlink"
									x="0px"
									y="0px"
									viewBox="0 0 750 471"
									style={{ enableBackground: 'new 0 0 750 471' }}
									xmlSpace="preserve"
								>
									<g id="Front">
										<g id="CardBackground">
											<g id="Page-1_1_">
												<g id="amex_1_">
													<path
														id="Rectangle-1_1_"
														className="lightcolor grey"
														d="M40,0h670c22.1,0,40,17.9,40,40v391c0,22.1-17.9,40-40,40H40c-22.1,0-40-17.9-40-40V40
                        C0,17.9,17.9,0,40,0z"
													/>
												</g>
											</g>
											<path
												className="darkcolor greydark"
												d="M750,431V193.2c-217.6-57.5-556.4-13.5-750,24.9V431c0,22.1,17.9,40,40,40h670C732.1,471,750,453.1,750,431z"
											/>
										</g>
										<text
											transform="matrix(1 0 0 1 60.106 295.0121)"
											id="svgnumber"
											className="st2 st3 st4"
										>
											0123 4567 8910 1112
										</text>
										<text
											transform="matrix(1 0 0 1 54.1064 428.1723)"
											id="svgname"
											className="st2 st5 st6"
										>
											{nameOwner === ' ' || nameOwner === ''
												? 'name'
												: nameOwner}
										</text>
										<text
											transform="matrix(1 0 0 1 54.1074 389.8793)"
											className="st7 st5 st8"
										>
											cardholder name
										</text>
										<text
											transform="matrix(1 0 0 1 479.7754 388.8793)"
											className="st7 st5 st8"
										>
											expiration
										</text>
										<text
											transform="matrix(1 0 0 1 65.1054 241.5)"
											className="st7 st5 st8"
										>
											card number
										</text>
										<g>
											<text
												transform="matrix(1 0 0 1 574.4219 433.8095)"
												id="svgexpire"
												className="st2 st5 st9"
											>
												01/23
											</text>
											<text
												transform="matrix(1 0 0 1 479.3848 417.0097)"
												className="st2 st10 st11"
											>
												VALID
											</text>
											<text
												transform="matrix(1 0 0 1 479.3848 435.6762)"
												className="st2 st10 st11"
											>
												THRU
											</text>
											<polygon
												className="st2"
												points="554.5,421 540.4,414.2 540.4,427.9 		"
											/>
										</g>
										<g id="cchip">
											<g>
												<path
													className="st2"
													d="M168.1,143.6H82.9c-10.2,0-18.5-8.3-18.5-18.5V74.9c0-10.2,8.3-18.5,18.5-18.5h85.3
                    c10.2,0,18.5,8.3,18.5,18.5v50.2C186.6,135.3,178.3,143.6,168.1,143.6z"
												/>
											</g>
											<g>
												<g>
													<rect
														x="82"
														y="70"
														className="st12"
														width="1.5"
														height="60"
													/>
												</g>
												<g>
													<rect
														x="167.4"
														y="70"
														className="st12"
														width="1.5"
														height="60"
													/>
												</g>
												<g>
													<path
														className="st12"
														d="M125.5,130.8c-10.2,0-18.5-8.3-18.5-18.5c0-4.6,1.7-8.9,4.7-12.3c-3-3.4-4.7-7.7-4.7-12.3
                        c0-10.2,8.3-18.5,18.5-18.5s18.5,8.3,18.5,18.5c0,4.6-1.7,8.9-4.7,12.3c3,3.4,4.7,7.7,4.7,12.3
                        C143.9,122.5,135.7,130.8,125.5,130.8z M125.5,70.8c-9.3,0-16.9,7.6-16.9,16.9c0,4.4,1.7,8.6,4.8,11.8l0.5,0.5l-0.5,0.5
                        c-3.1,3.2-4.8,7.4-4.8,11.8c0,9.3,7.6,16.9,16.9,16.9s16.9-7.6,16.9-16.9c0-4.4-1.7-8.6-4.8-11.8l-0.5-0.5l0.5-0.5
                        c3.1-3.2,4.8-7.4,4.8-11.8C142.4,78.4,134.8,70.8,125.5,70.8z"
													/>
												</g>
												<g>
													<rect
														x="82.8"
														y="82.1"
														className="st12"
														width="25.8"
														height="1.5"
													/>
												</g>
												<g>
													<rect
														x="82.8"
														y="117.9"
														className="st12"
														width="26.1"
														height="1.5"
													/>
												</g>
												<g>
													<rect
														x="142.4"
														y="82.1"
														className="st12"
														width="25.8"
														height="1.5"
													/>
												</g>
												<g>
													<rect
														x="142"
														y="117.9"
														className="st12"
														width="26.2"
														height="1.5"
													/>
												</g>
											</g>
										</g>
									</g>
									<g id="Back"></g>
								</svg>
							</div>
							<div className="back">
								<svg
									version="1.1"
									id="cardback"
									xmlns="http://www.w3.org/2000/svg"
									xmlnsXlink="http://www.w3.org/1999/xlink"
									x="0px"
									y="0px"
									viewBox="0 0 750 471"
									style={{ enableBackground: 'new 0 0 750 471' }}
									xmlSpace="preserve"
								>
									<g id="Front">
										<line
											className="st0"
											x1="35.3"
											y1="10.4"
											x2="36.7"
											y2="11"
										/>
									</g>
									<g id="Back">
										<g id="Page-1_2_">
											<g id="amex_2_">
												<path
													id="Rectangle-1_2_"
													className="darkcolor greydark"
													d="M40,0h670c22.1,0,40,17.9,40,40v391c0,22.1-17.9,40-40,40H40c-22.1,0-40-17.9-40-40V40
                    C0,17.9,17.9,0,40,0z"
												/>
											</g>
										</g>
										<rect y="61.6" className="st2" width="750" height="78" />
										<g>
											<path
												className="st3"
												d="M701.1,249.1H48.9c-3.3,0-6-2.7-6-6v-52.5c0-3.3,2.7-6,6-6h652.1c3.3,0,6,2.7,6,6v52.5
                C707.1,246.4,704.4,249.1,701.1,249.1z"
											/>
											<rect
												x="42.9"
												y="198.6"
												className="st4"
												width="664.1"
												height="10.5"
											/>
											<rect
												x="42.9"
												y="224.5"
												className="st4"
												width="664.1"
												height="10.5"
											/>
											<path
												className="st5"
												d="M701.1,184.6H618h-8h-10v64.5h10h8h83.1c3.3,0,6-2.7,6-6v-52.5C707.1,187.3,704.4,184.6,701.1,184.6z"
											/>
										</g>
										<text
											transform="matrix(1 0 0 1 621.999 227.2734)"
											id="svgsecurity"
											className="st6 st7"
										>
											985
										</text>
										<g className="st8">
											<text
												transform="matrix(1 0 0 1 518.083 280.0879)"
												className="st9 st6 st10"
											>
												security code
											</text>
										</g>
										<rect
											x="58.1"
											y="378.6"
											className="st11"
											width="375.5"
											height="13.5"
										/>
										<rect
											x="58.1"
											y="405.6"
											className="st11"
											width="421.7"
											height="13.5"
										/>
										<text
											transform="matrix(1 0 0 1 59.5073 228.6099)"
											id="svgnameback"
											className="st12 st13"
										>
											{nameOwner || 'name'}
										</text>
									</g>
								</svg>
							</div>
						</Box>
					</Box>
				</Grid>
				<Grid item xs={12} sm={12} md={6}>
					<Box
						component="form"
						sx={{ '& .MuiTextField-root': { m: 1 } }}
						noValidate
						autoComplete="off"
					>
						<div>
							{' '}
							<TextField
								label="Name"
								id="outlined-size-small"
								defaultValue="name"
								size="small"
								fullWidth
								onChange={(e) => {
									console.log(e.target.value);
									setNameOwner(e.target.value);
								}}
							/>
						</div>
						<div>
							<TextField
								label="Card Number"
								id="outlined-size-small"
								defaultValue="card-number"
								size="small"
								fullWidth
							/>
						</div>
						<Box
							sx={{
								'& .MuiTextField-root': { width: '25ch' },
							}}
						>
							<TextField
								label="Expiration (mm/yy)"
								id="outlined-size-small"
								value={values.textmask}
								onChange={handleChange}
								name="textmask"
								size="small"
								InputProps={{
									inputComponent: TextMaskCustom,
								}}
							/>
							<TextField
								label="Security Code"
								id="outlined-size-small"
								defaultValue=""
								size="small"
								onBlur={() => {
									creditCard.current.classList.remove('flipped');
								}}
								onFocus={() => {
									creditCard.current.classList.add('flipped');
								}}
							/>
							owner {nameOwner}
						</Box>
					</Box>
				</Grid>
			</Grid>
		</Container>
	);
};

export default CreditCard;
