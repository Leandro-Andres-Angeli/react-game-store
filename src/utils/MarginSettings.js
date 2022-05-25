import { useTheme } from '@mui/system';
import { makeStyles } from '@mui/styles';
export const MarginSettings = () => {
	const theme = useTheme();
	let customMargin = JSON.stringify(theme.mixins.toolbar).replace(
		/minHeight/g,
		'marginTop'
	);
	customMargin = JSON.parse(customMargin);
	const marginStyles = makeStyles({
		customMargin,
	});
	return marginStyles;
};
