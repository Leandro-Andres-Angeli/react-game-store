export const cardRules = {
	required: 'required field',
	minLength: { value: 19, message: 'card number must be 16 numbers ' },
};
export const expirationDateRules = {
	required: 'required field',
	minLength: {
		value: 5,
		message: 'expiration incomplete',
	},
};
export const CardSecurityCodeRules = {
	required: 'required field',
	minLength: {
		value: 3,
		message: 'code must contain 3 numbers',
	},
};
