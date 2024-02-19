import React, { useEffect, useState } from "react";
import "./style.scss";
import { useNavigate } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
import { useSelector } from "react-redux";
import Img from "../../../componets/lazyLoad/img";
import ContentWrapper from "../../../componets/contentWrapper/ContentWapper";

function HeroBanner() {
	const [background, setbackground] = useState("");
	const [query, setquery] = useState("");

	const { url } = useSelector((state) => state.home);

	const navigate = useNavigate();

	const { data, loading } = useFetch("/movie/upcoming");

	useEffect(() => {
		const bg =
			url.backdrop +
			data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;

		setbackground(bg);
	}, [url.backdrop]);

	const searchQueryHandler = (event) => {
		if (event.key === "Enter" && query.length > 0) {
			navigate(`/search/${query}`);
		}
	};
	return (
		<div className="heroBanner">
			{!loading && (
				<div className="backdrop-img">
					<Img src={background} />
				</div>
			)}

			<div className="opacity-layer"></div>
			<ContentWrapper>
				<div className="heroBannerContent">
					<span className="title"> Welcome.</span>
					<span className="subTitle">
						Millions of movies, Tv shows and people to discover. Explore now.
					</span>

					<div className="searchInput">
						<input
							onKeyUp={searchQueryHandler}
							onChange={(e) => setquery(e.target.value)}
							type="text"
							placeholder="Search for a movie or Tv shows..."
						/>

						<button>Search</button>
					</div>
				</div>
			</ContentWrapper>
		</div>
	);
}
export default HeroBanner;
