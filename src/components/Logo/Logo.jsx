import React from "react";
import "./Logo.scss";
import logo from "../../images/logo.jpg";

const Logo = () => {
	return (
		<a href="#" className="logo">
			<img className="logo__image" src={logo} alt="" />
		</a>
	);
};

export default Logo;
