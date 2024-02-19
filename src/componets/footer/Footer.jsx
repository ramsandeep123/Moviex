import React from "react";
import {
	FaFacebookF,
	FaInstagram,
	FaTwitter,
	FaLinkedin,
} from "react-icons/fa";

import "./style.scss";
import ContentWrapper from "../contentWrapper/ContentWapper";

const Footer = () => {
	return (
		<footer className="footer">
			<ContentWrapper>
				<ul className="menuItems">
					<li className="menuItem">Terms Of Use</li>
					<li className="menuItem">Privacy-Policy</li>
					<li className="menuItem">About</li>
					<li className="menuItem">Blog</li>
					<li className="menuItem">FAQ</li>
				</ul>
				<div className="infoText">
					🎬 Introducing Moviex: Your Gateway to Cinematic Exploration 🎥
					Experience the ultimate movie-watching journey with Moviex, the
					premier movie web app designed to elevate your entertainment
					experience to new heights. With Moviex, immerse yourself in a world of
					endless cinematic possibilities, where every movie enthusiast finds
					their perfect match. Discover a vast collection of movies spanning
					across genres, eras, and cultures, curated meticulously to cater to
					your diverse tastes and preferences. Whether you're a fan of
					action-packed blockbusters, heartwarming dramas, spine-tingling
					thrillers, or thought-provoking indie films, Moviex has something
					extraordinary waiting for you.
				</div>
				<div className="socialIcons">
					<span className="icon">
						<FaFacebookF />
					</span>
					<span className="icon">
						<FaInstagram />
					</span>
					<span className="icon">
						<FaTwitter />
					</span>
					<span className="icon">
						<FaLinkedin />
					</span>
				</div>
			</ContentWrapper>
		</footer>
	);
};

export default Footer;
