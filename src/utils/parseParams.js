export const parseParams = (param) => {
	let paramParsed = JSON.stringify(param)
		.replace(/"/g, '')
		.replace('{', '')
		.replace('}', '');
	paramParsed =
		paramParsed.includes('popular') === false
			? paramParsed.replace(':', 's=')
			: paramParsed;
	paramParsed =
		paramParsed.includes('RPG') === false
			? paramParsed.toLowerCase()
			: paramParsed;
	return paramParsed;
};
