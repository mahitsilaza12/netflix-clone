export const MovieService = {
	getMovies: (page: number = 1): Promise<any> =>
		fetch(
			'https://api.themoviedb.org/3/discover/movie?api_key=858649836578cac28d7a2b0eea4fdfe4&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=true&include_genre=true&page=' +
				page
		),
	searchMovie: (keyword: string, page: number = 1): Promise<any> =>
		fetch(
			'https://api.themoviedb.org/3/search/movie?api_key=858649836578cac28d7a2b0eea4fdfe4&language=en-US&query=' +
				keyword +
				'&page=' +
				page
		),
	searchKeyword: (keyword: string, page: number = 1): Promise<any> =>
		fetch(
			'https://api.themoviedb.org/3/search/keyword?api_key=858649836578cac28d7a2b0eea4fdfe4&language=en-US&query=' +
				keyword +
				'&page=' +
				page
		),
};
