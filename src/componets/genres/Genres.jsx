import React from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types"; // Import PropTypes
import "./style.scss";

const Genres = ({ data }) => {
	const { genres } = useSelector((state) => state.home);

	// console.log(genres);

	// console.log(data);
	// return (
	// 	<div className="genres">
	// 		{data?.map((g) => {
	// 			if (!genres[g]?.name) return;
	// 			return (
	// 				<div key={g} className="genre">
	// 					{genres[g]?.name}
	// 				</div>
	// 			);
	// 		})}

	// 	</div>

	// );

	return (
		<div className="genres">
			{data?.map((genreId) => {
				// Check if the genreId exists in genres
				const genre = genres[genreId];
				if (!genre) return null;
				//console.log(genre);
				//console.log(genre.name);
				return (
					<div key={genre.id} className="genre">
						{genre.name}
						{console.log(genre.name)}
					</div>
				);
			})}
		</div>
	);
};

Genres.propTypes = {
	data: PropTypes.array.isRequired, // Validate that 'data' prop is an array and is required
};

export default Genres;
