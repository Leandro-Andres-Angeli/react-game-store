export const filterGameCard = (res) => {
	return {
		count: res.data.count,
		next: res.data.next,
		previous: res.data.previous,
		results: res.data.results.map((game) => {
			return {
				id: game.id,
				name: game.name,
				slug: game.slug,
				platforms: game.platforms,
				rating: game.rating,
				background_image: game.background_image,
				released: game.released,
			};
		}),
	};
};
export const filterGameModal = (res) => {
	return {
		id: res.data.id,
		name: res.data.name,
		slug: res.data.slug,
		description: res.data.description,

		background_image: res.data.background_image,
		background_image_additional: res.data.background_image_additional,
	};
};
