import { ConstructionOutlined } from '@mui/icons-material';
import { Box } from '@mui/material';
import axios from 'axios';
import React, { memo, useCallback, useEffect, useMemo, useState } from 'react';
import { useFetch } from '../customHooks/useFetch';

const SliderItem = ({ gameId }) => {
	const KEY = process.env.REACT_APP_API_KEY;
	const URI = process.env.REACT_APP_API_BASE_URL;
	const endPointToFetch = `${URI}/games/${gameId}?key=${KEY}`;

	const [data, setData, isLoaded] = useFetch(endPointToFetch, [
		'background_image',
		'name',
	]);
	console.log(data);
	console.log(isLoaded);
	useEffect(() => {
		console.log('render');
	});

	return <Box>{JSON.stringify(data)}</Box>;
};

export default SliderItem;
