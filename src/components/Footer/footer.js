import React from "react";
import PropTypes from "prop-types";

const Footer = ({ footerClass }) => (
	<div className={`defaultFooter ${footerClass}`}>
		<p>
			Source code {" "} <a href="https://github.com/abdelhakimbendjabeur/website" target="_blank" rel="noopener noreferrer"> GitHub</a>{" "}
			| Template credits {" "} <a href="https://github.com/rashmiap/personal-website-react"  target="_blank" rel="noopener noreferrer"> Rashmi Ap</a>

		</p>
	</div>
);
Footer.propTypes = {
	footerClass: PropTypes.string
};
export default Footer;
