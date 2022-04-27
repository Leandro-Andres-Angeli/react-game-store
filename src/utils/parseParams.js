export const parseParams = (param) => {
	let paramParsed = JSON.stringify(param)
		.replace(/"/g, '')
		.replace('{', '')
		.replace('}', '')
		.replace(':', '=');

	paramParsed =
		paramParsed.includes('RPG') === false
			? paramParsed.toLowerCase()
			: paramParsed;
	return paramParsed;
};
