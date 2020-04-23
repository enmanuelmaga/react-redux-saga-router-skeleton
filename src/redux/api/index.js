import axios from 'axios';

const BASE_URL = 'http://www.omdbapi.com/?apikey=fbb7ec78';

export const apiCall = (url, data, headers, method) =>
	axios({
		method,
		url: BASE_URL + url,
		data,
		headers,
	});
