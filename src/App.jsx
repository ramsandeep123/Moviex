import React, { useEffect } from "react";
import { fetchApi } from "./utils/api";
import { useSelector, useDispatch } from "react-redux";
import { getApiConfiguration, getGenres } from "./store/homeSlice";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Details from "./pages/details/Details";
import SearchResult from "./pages/searchResult/SearchResult";
import Explore from "./pages/explore/Explore";
import PageNOtFound from "./pages/404/PageNOtFound";
import Header from "./componets/header/Header";
import Footer from "./componets/footer/Footer";
function App() {
	const dispatch = useDispatch();

	const { url } = useSelector((state) => state.home);

	console.log(url);

	const apiConfig = () => {
		fetchApi("/configuration").then((response) => {
			console.log(response);
			const url = {
				backdrop: response.images.secure_base_url + "original",

				profile: response.images.secure_base_url + "original",
				poster: response.images.secure_base_url + "original",
			};

			dispatch(getApiConfiguration(url));
		});
	};

	useEffect(() => {
		apiConfig();
		genresCall();
	}, []);

	const genresCall = async () => {
		let promises = [];

		let endPoint = ["tv", "movie"];

		let allGenres = {};

		//console.log(data);

		endPoint.forEach((url) => {
			promises.push(fetchApi(`/genre/${url}/list`));
		});

		const data = await Promise.all(promises);

		console.log(data);

		// data.map((genres) => {
		// 	return genres.map((item) => (allGenres[item.id] = item));
		// });

		data.forEach((response) => {
			const genresArray = response.genres; // Extract genres array from each response object
			genresArray.forEach((genre) => {
				allGenres[genre.id] = genre; // Map genres by id
			});
		});

		dispatch(getGenres(allGenres));
	};

	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />

				<Route path="/:mediaType/:id" element={<Details />} />

				<Route path="/search/:query" element={<SearchResult />} />

				<Route path="/explore/:mediaType" element={<Explore />} />

				<Route path="*" element={<PageNOtFound />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
