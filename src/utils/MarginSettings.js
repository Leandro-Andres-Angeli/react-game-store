export const marginSettingsGenerator = (themeFromDefault, propertyToChange) => {
	let result;

	result = JSON.stringify(themeFromDefault).replace(
		/minHeight/g,
		propertyToChange
	);
	result = JSON.parse(result);
	return result;
};
