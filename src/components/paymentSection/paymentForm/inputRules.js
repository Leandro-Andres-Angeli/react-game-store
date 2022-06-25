export const cardRules = {
	required: 'required field',
	minLength: { value: 19, message: 'card number must be 16 numbers ' },
};
export const nameRules = {
	required: 'required field',
	minLength: { value: 6, message: 'name too short' },
};
export const expirationDateRules = {
	required: 'required field',
	minLength: {
		value: 5,
		message: 'expiration incomplete',
	},
	validate: {
		validDate: (v) =>
			(v.split('/')[0] > new Date().getMonth() + 1 &&
				v.split('/')[1] !== new Date().getFullYear() - 2000) ||
			v.split('/')[1] > new Date().getFullYear() - 2000 ||
			'expired card',
	},
};
export const cardSecurityCodeRules = {
	required: 'required field',
	minLength: {
		value: 3,
		message: 'code must contain 3 numbers',
	},
};
export const msgRules = {
	required: 'required field',
	minLength: {
		value: 10,
		message: 'text too short',
	},
};

export const validEmail = {
	required: 'required field',
	pattern: {
		value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
		message: 'not valid e-mail',
	},
};
