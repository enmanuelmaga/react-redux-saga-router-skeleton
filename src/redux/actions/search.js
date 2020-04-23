import { SEARCH_MOVIE_START } from '../../consts/actionTypes';

export const searchMovie = (playload) => ({
	type: SEARCH_MOVIE_START,
	playload,
});
