// ./utils/api.js
import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_API_KEY = "9280c9fe0af0f75447a31dc6eb68ed58";

export const fetchApi = async (url, params) => {
	try {
		const { data } = await axios.get(BASE_URL + url, {
			params: {
				...params,
				api_key: TMDB_API_KEY,
			},
		});
		return data;
	} catch (error) {
		console.log(error);
		return null; // or handle error accordingly
	}
};
